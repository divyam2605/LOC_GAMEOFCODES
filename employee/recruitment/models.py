from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from phonenumber_field.modelfields import PhoneNumberField
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import PermissionsMixin
from .managers import CustomUserManager
# Create your models here.


category_choice=(
    ('Candidate','CANDIDATE'),
    ('Recruiter','RECRUITER'),
)

gender_choice=(
    ("Male","MALE"),
    ("Female","FEMALE"),
    ("Other","OTHER"),
)

qualification_choices=(
    ('Graduation','GRADUATION'),
    ('Senior Secendory (XII)','SENIOR SECENDORY (XII)'),
    ('Secendory (X)','SECENDORY (X)'),
    ('Diploma','DIPLOMA'),
    ('Post Graduation','POST GRADUATION'),
    ('PHD','PHD'),
)

class User_Model(AbstractBaseUser,PermissionsMixin):

    objects=CustomUserManager()

    First_Name=models.CharField(max_length=20,blank=False)
    Last_Name=models.CharField(max_length=20)
    password=models.CharField(max_length=15)
    Confirm_Password=models.CharField(max_length=15)
    Category=models.CharField(max_length=50,choices=category_choice)
    email=models.EmailField(unique=True)
    Phone_Number=PhoneNumberField()
    is_staff=models.BooleanField(default=False)
    is_admin=models.BooleanField(default=False)
    is_verified=models.BooleanField(default=False)


    USERNAME_FIELD='email'

    def __str__(self):
        return self.email

class CandidateModel(models.Model):
    User_email=models.ForeignKey(User_Model,on_delete=models.CASCADE)
    Date_of_birth=models.DateField(blank=False)
    Gender=models.CharField(max_length=30,choices=gender_choice)
    Qualification=models.CharField(max_length=100,choices=qualification_choices)
    Skills=models.CharField(max_length=100)
    Resume=models.FileField(upload_to='media/')
    Years_of_Experience=models.IntegerField()
    Expected_Salary=models.IntegerField()


class RecruiterModel(models.Model):
    Recruiter_email=models.ForeignKey(User_Model,on_delete=models.CASCADE)
    Company_name=models.CharField(max_length=100)
    Location=models.CharField(max_length=100)
    Sector=models.CharField(max_length=100)
    Company_Phone_Number=PhoneNumberField()
    Company_link=models.URLField(max_length=200)

    def __int__(self):
        return self.id


class Recruitment_offer(models.Model):
    Recruiter_id=models.ForeignKey(RecruiterModel,on_delete=models.CASCADE)
    Job_Type=models.CharField(max_length=100)
    Job_Sector=models.CharField(max_length=1000)
    Job_Description=models.TextField()
    Job_Salary_Offer=models.IntegerField()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)



from rest_framework import serializers
from .models import *
from rest_framework.exceptions import ValidationError

class user_model_serializer(serializers.ModelSerializer):
    class Meta:
        model=User_Model
        fields='__all__'

    def create(self,validated_data):
        password=validated_data['password'],
        confirm_password=validated_data['Confirm_Password'],
        user=User_Model(
            First_Name=validated_data['First_Name'],
            Last_Name=validated_data['Last_Name'],
            password=validated_data['password'],
            Confirm_Password=validated_data['Confirm_Password'],
            Category=validated_data['Category'],
            email=validated_data['email'],
            Phone_Number=validated_data['Phone_Number'],
        )
        if password!=confirm_password :
            raise ValidationError("The Password did not match")
        user.set_password(validated_data['password'])
        user.save()
        return user

class candidate_model_serializer(serializers.ModelSerializer):
    User_email=serializers.SlugRelatedField(queryset=User_Model.objects.all(),slug_field='email')
    class Meta:
        model=CandidateModel
        fields='__all__'

    def create(self,validated_data):
        candidate=CandidateModel(
            User_email=self.validated_data['User_email'],
            Date_of_birth=self.validated_data['Date_of_birth'],
            Gender=self.validated_data['Gender'],
            Qualification=self.validated_data['Qualification'],
            Skills=self.validated_data['Skills'],
            Resume=self.validated_data['Resume'],
            Years_of_Experience=self.validated_data['Years_of_Experience'],
            Expected_Salary=self.validated_data['Expected_Salary'],
        )
        candidate.save()
        return candidate

class recruiter_model_serializer(serializers.ModelSerializer):
    Recruiter_email=serializers.SlugRelatedField(queryset=User_Model.objects.all(),slug_field='email')
    class Meta:
        model=RecruiterModel
        fields='__all__'

    def create(self, validated_data):
        recruiter=RecruiterModel(
            Recruiter_email=self.validated_data['Recruiter_email'],
            Company_name=self.validated_data['Company_name'],
            Location=self.validated_data['Location'],
            Sector=self.validated_data['Sector'],
            Company_Phone_Number=self.validated_data['Company_Phone_Number'],
            Company_link=self.validated_data['Company_link'],
        )
        recruiter.save()
        return recruiter

class LoginSerializer(serializers.ModelSerializer):    
    class Meta:
        model = User_Model
        fields = ['email','password']

class JobSerializer(serializers.ModelSerializer):
    Recruiter_id=serializers.SlugRelatedField(queryset=RecruiterModel.objects.all(),slug_field='id')
    class Meta:
        model=Recruitment_offer
        fields='__all__'

    def create(self,validated_data):
        Job=Recruitment_offer(
            Recruiter_id=self.validated_data['Recruiter_id'],
            Job_Type=self.validated_data['Job_Type'],
            Job_Sector=self.validated_data['Job_Sector'],
            Job_Description=self.validated_data['Job_Description'],
            Job_Salary_Offer=self.validated_data['Job_Salary_Offer'],
        )
        Job.save()
        return Job
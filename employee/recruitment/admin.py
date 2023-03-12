from django.contrib import admin
from .models import *


# Register your models here.

@admin.register(User_Model)
class useradmin(admin.ModelAdmin):
    list_display=('id','First_Name','Last_Name','password','Category','email','Phone_Number','is_verified','is_admin','is_staff')

@admin.register(CandidateModel)
class useradmin(admin.ModelAdmin):
    list_display=('id','User_email','Date_of_birth','Gender','Qualification','Skills','Resume','Years_of_Experience','Expected_Salary')

@admin.register(RecruiterModel)
class useradmin(admin.ModelAdmin):
    list_display=('id','Recruiter_email','Company_name','Location','Sector','Company_Phone_Number','Company_link')    

@admin.register(Recruitment_offer)
class useradmin(admin.ModelAdmin):
    list_display=('id','Recruiter_id','Job_Type','Job_Sector','Job_Description','Job_Salary_Offer')

from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializers import *
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth import login,authenticate,logout
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from django.utils.decorators import method_decorator
from rest_framework import mixins
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.views.generic.list import ListView
from django.http import JsonResponse
from django.core import serializers
import razorpay
from rest_framework.decorators import api_view,permission_classes
from .models import *
from rest_framework.permissions import AllowAny
import json
from django.core.serializers import serialize
from rest_framework import status
from rest_framework.generics import GenericAPIView

# Create your views here.
"""
superuser: niketshah@gmail.com 
password: Niket 
"""


class Login(GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class=LoginSerializer
    def post(self,request,*args,**kwargs ):
        email = request.data.get('email',None)
        password = request.data.get('password',None)
        user=authenticate(request,email=email,password=password)
        if user:
            login(request,user)
            token = Token.objects.get(user=user)
            if RecruiterModel.objects.filter(Recruiter_email = user):
                is_recruiter = True
            else:
                is_recruiter = False
            user_data=User_Model.objects.filter(email=email)
            serialized_data = serialize("json", User_Model.objects.filter(email=email))
            serialized_data = json.loads(serialized_data)
            return Response({'user_data':serialized_data,'token' : token.key,'email' : user.email,'is_recruiter' : is_recruiter},status = status.HTTP_200_OK)
        
        return Response('Invalid Credentials',status = status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes([AllowAny])
def signout(request):
    logout(request)
    return Response({"logout":"You are logged out"})

class Register(GenericAPIView):
    permission_classes=[AllowAny]
    serializer_class=user_model_serializer
    def post(self,request,format=None):
        data={}
        serializer1=user_model_serializer(data=request.data)
        if serializer1.is_valid():
            account=serializer1.save()
        user2=serializer1.data
        user=User_Model.objects.get(email=account.email)
        try:
            token = Token.objects.get(user_id=user.id)

        except Token.DoesNotExist:
            token = Token.objects.create(user=user)

        name=User_Model.objects.get(email=account.email)
        send_mail(
            subject='Hello Welcome to django email verification',
            message='Hi '+name.First_Name+
            ' ,Thank you for registering.',
            from_email= settings.EMAIL_HOST_USER,
            recipient_list=[user,]
        )
        data['user_data']=user2
        user_token=Token.objects.get(user=user)
        data['token']=user_token.key
        return Response(data,status=status.HTTP_201_CREATED)


class CandidateData(GenericAPIView):
    permission_classes=[AllowAny]
    serializer_class=candidate_model_serializer
    def post(self,request,format=None):
        dataset={}
        serializer2=candidate_model_serializer(data=request.data)
        if serializer2.is_valid():
            account=serializer2.save()
        candidate=serializer2.data
        dataset['candidate_data']=candidate
        candidate_token=Token.objects.get(user=User_Model.objects.get(email=account.User_email))
        dataset['token']=candidate_token.key
        return Response(dataset,status=status.HTTP_201_CREATED)


class RecruiterData(GenericAPIView):
    permission_classes=[AllowAny]
    serializer_class=recruiter_model_serializer
    def post(self,request,format=None):
        dataset={}
        serializer3=recruiter_model_serializer(data=request.data)
        if serializer3.is_valid():
            account=serializer3.save()
        candidate=serializer3.data
        dataset['recruiter_data']=candidate
        recruiter_token=Token.objects.get(user=User_Model.objects.get(email=account.Recruiter_email))
        dataset['token']=recruiter_token.key
        return Response(dataset,status=status.HTTP_201_CREATED)


class GET_CANDIDATE_DETAILS(GenericAPIView):
    permission_classes=[AllowAny]
    def get(self,request,candidateid,*args,**kwargs):
        candidate_details=serialize("json",CandidateModel.objects.filter(User_email=candidateid))
        candidate_details=json.loads(candidate_details)
        return Response(candidate_details,status=status.HTTP_200_OK)

class GET_RECRUITER_DETAILS(GenericAPIView):
    permission_classes=[AllowAny]
    def get(self,request,recruiterid,*args,**kwargs):
        recruiter_details=serialize("json",RecruiterModel.objects.filter(Recruiter_email=recruiterid))
        recruiter_details=json.loads(recruiter_details)
        return Response(recruiter_details,status=status.HTTP_200_OK)

class Job_Offer(GenericAPIView):
    authentication_classes=[TokenAuthentication]
    permission_classes=[AllowAny]
    def post(self,request,format=None):
        dataset={}
        serializer4=JobSerializer(data=request.data)
        if serializer4.is_valid():
            job=serializer4.save()
        jobs_data=serializer4.data
        total_jobs=Recruitment_offer.objects.all()
        serialized_data = serialize("json", Recruitment_offer.objects.filter(Recruiter_id=RecruiterModel.objects.get(Recruiter_email=request.user)))
        serialized_data = json.loads(serialized_data)
        return Response(serialized_data,status=status.HTTP_202_ACCEPTED)


class GET_JOB_DATA_CANDIDATE(GenericAPIView):
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    def get(self,request,format=None):
        serialize_jobs=serialize("json",Recruitment_offer.objects.all())
        serialize_jobs=json.loads(serialize_jobs)
        return Response(serialize_jobs,status=status.HTTP_200_OK)

class userprofile(GenericAPIView):
    authentication_classes=[TokenAuthentication]
    permission_classes=[IsAuthenticated]
    def get(self,request,userid,*args,**kwargs):
        try:
            user_details=User_Model.objects.get(id=userid)
        except:
            return Response({'ERROR':"User data not Found"},status=status.HTTP_404_NOT_FOUND)
        try:
            print(user_details.email)
            final_details=RecruiterModel.objects.filter(Recruiter_email=User_Model.objects.get(email=user_details.email))
        except:
            try:
                final_details=CandidateModel.objects.get(User_email=User_Model.objects.get(email=user_details.email))
            except:
                return Response({'ERROR':"USER NOT FOUND"},status=status.HTTP_404_NOT_FOUND)
        print(user_details,final_details)
        serialize_final=serialize("json",final_details)
        serialize_final=json.loads(serialize_final)
        serialize_user=serialize("json",[User_Model.objects.get(email=user_details.email)])
        serialize_user=json.loads(serialize_user)
        return Response({'user_details':user_details,'final_details':serialize_final})

class allrecruiters(GenericAPIView):
    permission_classes=[AllowAny]
    def get(self,request,format=None):
        serialize_jobs=serialize("json",RecruiterModel.objects.all())
        serialize_jobs=json.loads(serialize_jobs)
        return Response(serialize_jobs,status=status.HTTP_200_OK)



                



        




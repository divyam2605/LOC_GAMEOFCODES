from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path("register/",views.Register.as_view(),name='register'),
    path("signin",views.Login.as_view(),name='signin'),
    path("signout",views.signout,name='signout'),
    path("candidate/",views.CandidateData.as_view(),name='candidate'),
    path('recruiter/',views.RecruiterData.as_view(),name='recruiter'),
    path('candidateprofile/<int:candidateid>',views.GET_CANDIDATE_DETAILS.as_view(),name='profile'),
    path('recruiterprofile',views.allrecruiters.as_view(),name='profile'),
    path('jobs',views.Job_Offer.as_view(),name='jobs'),
    path('joboffers',views.GET_JOB_DATA_CANDIDATE.as_view(),name='offers'),
    path('profile/<int:userid>',views.userprofile.as_view(),name='profile'),

    path('payment/<id>',views.member_payment,name='payment'),
    path('success',views.success,name='success_payment'),

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
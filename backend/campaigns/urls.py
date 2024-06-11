from django.urls import path
from .views import CampaignListAPIView, CampaignDetail, SubscriberToCampaignAPIView

urlpatterns = [
    path("campaigns", CampaignListAPIView.as_view(), name="campaigns"),
    path("campaigns/<str:slug>", CampaignDetail.as_view(), name="campaigns_detail"),
    path("subscribers", SubscriberToCampaignAPIView.as_view(), name="subscribers"),
]

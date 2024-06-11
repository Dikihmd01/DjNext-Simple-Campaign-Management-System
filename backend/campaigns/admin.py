from django.contrib import admin
from .models import Campaign, Subscriber

class CampaignAdmin(admin.ModelAdmin):
    list_display = ("title", "create_date", "update_date")
    search_fields = ("title", "description")
    list_per_page = 10

class SubscriberAdmin(admin.ModelAdmin):
    list_display = ("email", "campaign", "create_date", "update_date")
    search_fields = ("email", "campaign__title")
    list_per_page = 10

admin.site.register(Campaign, CampaignAdmin)
admin.site.register(Subscriber, SubscriberAdmin)

# Generated by Django 4.2.13 on 2024-06-11 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='slug',
            field=models.SlugField(blank=True, max_length=255, null=True),
        ),
    ]

# Generated by Django 5.1.4 on 2025-01-15 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("kits", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="folder",
            name="favorite",
            field=models.BooleanField(default=False),
        ),
    ]

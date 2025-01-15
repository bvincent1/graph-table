# Generated by Django 5.1.4 on 2025-01-14 22:29

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Answer",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.TextField()),
                ("description", models.TextField(default="")),
                ("image", models.URLField(blank=True, null=True)),
                ("index", models.PositiveIntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name="Folder",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                ("inherit_permissions", models.BooleanField(default=True)),
                ("name", models.TextField()),
                ("description", models.TextField(blank=True, default="", null=True)),
                (
                    "parent",
                    models.ForeignKey(
                        blank=True,
                        default=None,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="children_folders",
                        to="kits.folder",
                    ),
                ),
            ],
            options={
                "ordering": ["created"],
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Question",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                ("inherit_permissions", models.BooleanField(default=True)),
                ("title", models.TextField(default="")),
                ("description", models.TextField(blank=True, default="", null=True)),
                ("image", models.URLField(blank=True, null=True)),
                (
                    "answers",
                    models.ManyToManyField(
                        blank=True, related_name="question", to="kits.answer"
                    ),
                ),
                (
                    "next",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="previous",
                        to="kits.question",
                    ),
                ),
            ],
            options={
                "ordering": ["created"],
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Kit",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                ("inherit_permissions", models.BooleanField(default=True)),
                ("title", models.TextField()),
                (
                    "parent",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="children_kits",
                        to="kits.folder",
                    ),
                ),
                (
                    "start",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="kit",
                        to="kits.question",
                    ),
                ),
            ],
            options={
                "ordering": ["created"],
                "abstract": False,
            },
        ),
    ]

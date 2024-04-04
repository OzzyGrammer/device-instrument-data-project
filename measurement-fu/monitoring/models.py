from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):

    pass


class Device(models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Parameter(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.device.title} - {self.title}"


class DeviceData(models.Model):
    parameter = models.ForeignKey(Parameter, on_delete=models.CASCADE)
    timestamp = models.DateTimeField()
    value = models.CharField(max_length=255)
    type = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.parameter} - {self.timestamp}"

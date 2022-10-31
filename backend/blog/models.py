from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now

class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(unique=False, max_length=128)
    text = models.TextField()
    image = models.ImageField(upload_to='blog_images', blank=True, null=True)
    created_at = models.DateTimeField(editable=False)
    updated_at = models.DateTimeField()

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = now()
        self.updated_at = now()
        return super(Blog, self).save(*args, **kwargs)

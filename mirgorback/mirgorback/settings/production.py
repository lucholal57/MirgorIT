from .base import *
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['192.168.52.147','192.168.52.255', 'mirgorit.com','www.mirgorit.com']

DATABASES ={
    'default':{
        'ENGINE' : 'django.db.backends.postgresql_psycopg2',
        'NAME' : 'mirgordb',
        'USER' : 'admin+',
        'PASSWORD' : 'admin',
        'HOST' : 'localhost',
       'PORT' : '5432',
    }
}


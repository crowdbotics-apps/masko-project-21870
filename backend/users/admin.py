from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model

from users.forms import UserChangeForm, UserCreationForm
from users.models import SignUpProduct

User = get_user_model()

class ProductsInline(admin.TabularInline):
    model = SignUpProduct
    fields = ('product', 'created_at', )
    readonly_fields = ( 'product', 'created_at', )



@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):
    inlines = [
        ProductsInline,
    ]

    form = UserChangeForm
    add_form = UserCreationForm
    fieldsets = (
                ("User", {"fields": ("name",)} ),) + auth_admin.UserAdmin.fieldsets + (
                ("SIGNUP QUESTIONS", {"fields": ("signup_frequent_purchase",)} ),)
    list_display = ["username", "name", "is_superuser"]
    search_fields = ["name"]

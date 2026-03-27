import json
from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id': product.category_id,
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

def category_list(request):
    categories = list(Category.objects.values())
    return JsonResponse(categories, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse({'id': category.id, 'name': category.name})
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

def category_products(request, id):
    products = list(Product.objects.filter(category_id=id).values())
    return JsonResponse(products, safe=False)
from nodes.serializers import NodeVersioningSerializer, ParentFolderSerializer
from .models import Invoice, LineItem, Item
from rest_framework.validators import UniqueTogetherValidator


class ItemSerializer(NodeVersioningSerializer):
    class Meta:
        model = Item
        fields = "__all__"


class LineItemSerializer(NodeVersioningSerializer):
    items = ItemSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = LineItem
        fields = "__all__"


class InvoiceSerializer(NodeVersioningSerializer):
    line_items = LineItemSerializer(
        many=True,
        read_only=True,
    )
    parent = ParentFolderSerializer()

    class Meta:
        model = Invoice
        # depth = 2
        fields = "__all__"

import {sendStepOneData, setCatalogImportData} from '../../store/actions/import-actions';

export const onUpload = (uploadData) => {
    return dispatch => {
        dispatch(sendStepOneData(true));
        const data = {
            "csv": "5c5e0918a7b06c7e2e66e324",
            "db_fields": [
                {name: "code", label: "Product Code", "required": true},
                {name: "brand", label: "Brand"},
                {name: "name", label: "Product Name", "required": true},
                {name: "parent_code", label: "Parent Product Code", "recomended": true},
                {name: "link_url", label: "Link URL"},
                {name: "description", label: "Description", "recomended": true},
                {name: "colour", label: "Colour", "required": true},
                {name: "size", label: "Size", "required": true},
                {name: "image_name", label: "Product Image Name", "recomended": true},
                {name: "tags", label: "Tags"},
                {name: "category", label: "Category"},
                {name: "sub_category", label: "Sub Category"},
                {name: "decoration_areas", label: "Decoration Areas"}
            ],
            "db_fields2": [
                {name: "quantity_per_carton", label: "Quantity Per Carton"},
                {name: "carton_length", label: "Carton Length"},
                {name: "carton_width", label: "Carton Width"},
                {name: "carton_height", label: "Carton Height"},
                {name: "carton_weight", label: "Carton Weight"},
                {name: "carton_cubic", label: "Carton Cubic"},
                {name: "carton_notes", label: "Carton Notes"},
                {name: "freight_description", label: "Freight Description"},
                {name: "individual_product_packaging", label: "Individual Product Packaging"},
                {name: "standard_production_time", label: "Standard Production Time"},
                {name: "stock", label: "Stock/Indent"},
                {name: "primary_price_description", label: "Primary Price Description"}
            ],
            "db_fields3": [
                {name: "services", label: "Services", required: true},
                // {name: "decorations", label: "Decorations"}
            ],
            "csv_headers": [
                "Type",
                "SKU",
                "Name",
                "Published",
                "Is featured?",
                "Visibility in catalog",
                "Short description",
                "Description",
                "Date sale price starts",
                "Date sale price ends",
                "Tax class",
                "In stock?",
                "Stock",
                "Backorders allowed?",
                "Sold individually?",
                "Weight (kg)",
                "Length (cm)",
                "Width (cm)",
                "Height (cm)",
                "Allow customer reviews?",
                "Purchase note",
                "Sale price",
                "Regular price",
                "Categories",
                "Tags",
                "Shipping class",
                "Images",
                "Download limit",
                "Download expiry days",
                "Parent",
                "Grouped products",
                "Upsells",
                "Cross-sells",
                "External URL",
                "Button text",
                "Download 1 name",
                "Download 1 URL",
                "Attribute 1 name",
                "Attribute 1 value(s)",
                "Attribute 1 visible",
                "Attribute 1 global",
                "Attribute 2 name",
                "Attribute 2 value(s)",
                "Attribute 2 visible",
                "Attribute 2 global",
                "Attribute 1 default",
                "Attribute 2 default"
            ]
        }
        dispatch(setCatalogImportData(data));
    }
}
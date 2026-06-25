import fs from 'fs';

const rawData = `"post_title","post_name","post_parent","ID","post_content","post_excerpt","post_status","post_password","menu_order","post_date","post_author","comment_status","sku","parent_sku","children","downloadable","virtual","stock","regular_price","sale_price","weight","length","width","height","tax_class","visibility","stock_status","backorders","sold_individually","low_stock_amount","manage_stock","tax_status","upsell_ids","crosssell_ids","purchase_note","sale_price_dates_from","sale_price_dates_to","download_limit","download_expiry","product_url","button_text","images","downloadable_files","product_page_url","meta:total_sales","meta:_global_unique_id","tax:product_brand","tax:product_type","tax:product_visibility","tax:product_cat","tax:product_tag","tax:product_shipping_class","tax:pos_product_visibility","attribute:pa_lense-type","attribute_data:pa_lense-type","attribute_default:pa_lense-type"
"Johnson & Johnson / 30 daily lenses","johnson-johnson-30-daily-lenses","","3427","Johnson &amp; Johnson / 30 monthly lenses","","Published","","0","2025-02-13 08:00:12","1","closed","","","","no","no","","25","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","https://jeepoo.com/wp-content/uploads/2025/02/Add-a-heading.webp ! alt :  ! title : Add-a-heading.webp ! desc :  ! caption : ","","https://jeepoo.com/shop-2/jj/johnson-johnson-30-daily-lenses/","","","","simple","","J&amp;J","","","","","",""
"Johnson & Johnson / 6 monthly lenses","johnson-johnson-6-monthly-lenses","","3426","Johnson &amp; Johnson / 6 monthly lenses","","Published","","0","2025-02-13 08:00:12","1","closed","","","","no","no","","25","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","https://jeepoo.com/wp-content/uploads/2025/02/6-monthly.webp ! alt :  ! title : 6-monthly.webp ! desc :  ! caption : ","","https://jeepoo.com/shop-2/contact-lenses/johnson-johnson-6-monthly-lenses/","","","","simple","","Contact lenses","","","","","",""
"Dima Lenses 100ml. محلول عدسات","dima-lenses-100ml-محلول-عدسات","","3424","","","Published","","0","2025-02-13 08:00:12","1","closed","","","","no","no","","5.5","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","https://jeepoo.com/wp-content/uploads/2025/02/Solution-2.webp ! alt :  ! title : Solution-2.webp ! desc :  ! caption : ","","https://jeepoo.com/shop-2/solution/dima-lenses-100ml-%d9%85%d8%ad%d9%84%d9%88%d9%84-%d8%b9%d8%af%d8%b3%d8%a7%d8%aa/","","","","simple","","Solution","CooperVision","","","","",""
"CoperVision 100ml. محلول عدسات","copervision-100ml-محلول-عدسات","","3423","All in One Light .","","Published","","0","2025-02-13 08:00:12","1","closed","","","","no","no","","4","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","https://jeepoo.com/wp-content/uploads/2025/02/Solution-3.webp ! alt :  ! title : Solution-3.webp ! desc :  ! caption : ","","https://jeepoo.com/shop-2/solution/copervision-100ml-%d9%85%d8%ad%d9%84%d9%88%d9%84-%d8%b9%d8%af%d8%b3%d8%a7%d8%aa/","","","","simple","","Solution","CooperVision","","","","",""
"CoperVision 250ml. محلول عدسات","copervision-250ml-محلول-عدسات","","3422","All in One Light .","","Published","","0","2025-02-13 08:00:12","1","closed","","","","no","no","","6","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","https://jeepoo.com/wp-content/uploads/2025/02/Solution-3.webp ! alt :  ! title : Solution-3.webp ! desc :  ! caption : ","","https://jeepoo.com/shop-2/solution/copervision-250ml-%d9%85%d8%ad%d9%84%d9%88%d9%84-%d8%b9%d8%af%d8%b3%d8%a7%d8%aa/","","","","simple","","Solution","CooperVision","","","","",""
"CoperVision 360ml. محلول عدسات","copervision-360ml-محلول-عدسات","","3421","All in One Light .","","Published","","0","2025-02-13 08:00:12","1","closed","","","","no","no","","7","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","https://jeepoo.com/wp-content/uploads/2025/02/Solution-5.webp ! alt :  ! title : Solution-5.webp ! desc :  ! caption : ","","https://jeepoo.com/shop-2/solution/copervision-360ml-%d9%85%d8%ad%d9%84%d9%88%d9%84-%d8%b9%d8%af%d8%b3%d8%a7%d8%aa/","","","","simple","","Solution","CooperVision","","","","",""
"Avizor 350 ml. محلول عدسات","avizor-350-ml-محلول-عدسات","","3420","For Sensitive eyes with Sodium hyaluronate","","Published","","0","2025-02-13 08:00:12","1","closed","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","https://jeepoo.com/wp-content/uploads/2025/02/Solution-1.webp ! alt :  ! title : Solution-1.webp ! desc :  ! caption : ","","https://jeepoo.com/shop-2/solution/avizor-350-ml-%d9%85%d8%ad%d9%84%d9%88%d9%84-%d8%b9%d8%af%d8%b3%d8%a7%d8%aa/","","","","simple","","Solution","","","","","",""
"Avizor 120 ml. محلول عدسات","avizor-120-ml-محلول-عدسات","","3419","For Sensitive eyes with Sodium hyaluronate","","Published","","0","2025-02-13 08:00:11","1","closed","","","","no","no","","4","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","https://jeepoo.com/wp-content/uploads/2025/02/Solution-1.webp ! alt :  ! title : Solution-1.webp ! desc :  ! caption : ","","https://jeepoo.com/shop-2/solution/avizor-120-ml-%d9%85%d8%ad%d9%84%d9%88%d9%84-%d8%b9%d8%af%d8%b3%d8%a7%d8%aa/","","","","simple","","Solution","","","","","",""
"Avizor 60 ml. محلول عدسات","avizor-60-ml-محلول-عدسات","","3418","For Sensitive eyes with Sodium hyaluronate","","Published","","0","2025-02-13 08:00:11","1","closed","","","","no","no","","3","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","https://jeepoo.com/wp-content/uploads/2025/02/Solution-7.webp ! alt :  ! title : Solution-7.webp ! desc :  ! caption : ","","https://jeepoo.com/shop-2/solution/avizor-60-ml-%d9%85%d8%ad%d9%84%d9%88%d9%84-%d8%b9%d8%af%d8%b3%d8%a7%d8%aa/","","","","simple","","Solution","","","","","",""
"Brown/ Calavue/ يومي","brown-calavue-يومي","","3314","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","5","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Calavue","","","","No power|with Power","0|1|0",""
"gray / Calavue/ يومي","gray-calavue-يومي","","3313","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","5","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Calavue","","","","No power|with Power","0|1|0",""
"Green / Calavue/ يومي","green-calavue-يومي","","3312","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","5","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Calavue","","","","No power|with Power","0|1|0",""
"nova-gray / Calavue/ يومي","nova-gray-calavue-يومي","","3311","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","5","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Calavue","","","","No power|with Power","0|1|0",""
"Nova Hazel / Calavue/ يومي","nova-hazel-calavue-يومي","","3310","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","5","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Calavue","","","","No power|with Power","0|1|0",""
"Pure Hazel / Calavue/ يومي","pure-hazel-calavue-يومي","","3309","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","5","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Calavue","","","","No power|with Power","0|1|0",""
"Nova Green/ Calavue/ يومي","nova-green-calavue-يومي","","3308","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","5","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Calavue","","","","No power|with Power","0|1|0",""
"Marine / Calavue/ يومي","marine-calavue-يومي","","3307","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","5","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Calavue","","","","No power|with Power","0|1|0",""
"Nova Amber / Calavue/ يومي","nova-amber-calavue-يومي","","3306","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","5","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Amber Grey|Calavue","","","","No power|with Power","0|1|0",""
"WILD GREEN","wild-green","","3305","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Celena","","","","No power|with Power","0|1|0",""
"VIVID GREY","vivid-grey","","3304","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Celena","","","","No power|with Power","0|1|0",""
"STYLISH HAZEL","stylish-hazel","","3303","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Celena","","","","No power|with Power","0|1|0",""
"STYLISH GREY","stylish-grey","","3302","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Celena","","","","No power|with Power","0|1|0",""
"OLIVE GREEN","olive-green","","3301","Without Power","","Published","","0","2025-02-13 07:59:57","1","closed","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Celena","","","","No power|with Power","0|1|0",""
"DEEP BLUE","deep-blue","","3276","Without Power","","Published","","0","2025-02-13 07:59:53","1","closed","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Celena","","","","No power|with Power","0|1|0",""
"BASIL GREY ONE DAY COLLECTION","basil-grey-one-day-collection","","3275","Without Power","","Published","","0","2025-02-13 07:59:53","1","closed","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Celena","","","","No power|with Power","0|1|0",""
"AQUA GREY ONE DAY COLLECTION // Without Power","aqua-grey-one-day-collection-without-power","","3274","Without Power","","Published","","0","2025-02-13 07:59:53","1","closed","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Celena","","","","No power|with Power","0|1|0",""
"TRI GREY Adore Tri Collection","tri-grey-adore-tri-collection","","3039","","","Published","","0","2025-02-13 07:59:13","1","closed","","","","no","no","","20","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Adore","Tri collection Adore|TRI LIGHT GREEN Adore","","","No power|with Power","0|1|0",""
"TRI LIGHT GREEN Adore Tri Collection","tri-light-green-adore-tri-collection","","3038","","","Published","","0","2025-02-13 07:59:13","1","closed","","","","no","no","","20","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Adore","Tri collection Adore|TRI LIGHT GREEN Adore","","","No power|with Power","0|1|0",""
"TRI LIGHT GREY Adore Tri Collection","tri-light-grey-adore-tri-collection","","3037","","","Published","","0","2025-02-13 07:59:13","1","closed","","","","no","no","","20","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Adore","Tri collection Adore","","","No power|with Power","0|1|0",""
"TRI LIGHT BLUE Adore Tri Collection","tri-light-blue-adore-tri-collection","","3036","","","Published","","0","2025-02-13 07:59:13","1","closed","","","","no","no","","20","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Adore","Tri collection Adore","","","No power|with Power","0|1|0",""
"Tri Hazel Adore Tri Collection","tri-hazel-adore-tri-collection","","3035","","","Published","","0","2025-02-13 07:59:13","1","closed","","","","no","no","","20","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Adore","Tri collection Adore","","","No power|with Power","0|1|0",""
"Adore-Trendy Tri-Tone-lens-blue collection","adore-trendy-tri-tone-lens-blue-collection","","3034","","","Published","","0","2025-02-13 07:59:13","1","closed","","","","no","no","","20","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Adore","Natural bi tone collection","","","No power|with Power","0|1|0",""
"Biomedics -1 Day Extra - Daily use QTY: 30 Lenses","biomedics-1-day-extra-daily-use-qty-30-lenses","","2972","","","Published","","0","2025-02-13 07:59:03","1","closed","","","","no","no","","25","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Biomedics|Contact lenses","","","","","",""
"هني #36 (يومي)","هني-36-يومي","","2874","","","Published","","0","2025-02-13 07:58:45","1","closed","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"كابتشينو #35 (يومي)","كابتشينو-35-يومي","","2873","","","Published","","0","2025-02-13 07:58:45","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"ناتشورال جرين #34 (يومي)","ناتشورال-جرين-34-يومي","","2814","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"ناتشورال جراي #33 (يومي)","ناتشورال-جراي-33-يومي","","2813","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"ناتشورال هازل #32 (يومي)","ناتشورال-هازل-32-يومي","","2812","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"ناتشورال بلو #31 (يومي)","ناتشورال-بلو-31-يومي","","2811","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"هاواي #29 (يومي)","هاواي-29-يومي","","2810","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"أرجان #28 (يومي)","أرجان-28-يومي","","2809","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"ألاسكا #27 (يومي)","ألاسكا-27-يومي","","2808","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"راين #26 (يومي)","راين-26-يومي","","2807","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"مينثا #25 (يومي)","مينثا-25-يومي","","2806","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"بيرل #24 (يومي)","بيرل-24-يومي","","2805","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"هند #23 (يومي)","هند-23-يومي","","2804","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"تيفاني بلو #22 (يومي)","تيفاني-بلو-22-يومي","","2803","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"كراميل #21 (يومي)","كراميل-21-يومي","","2802","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"أكوا #20 (يومي)","أكوا-20-يومي","","2801","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"ماروون #19 (يومي)","ماروون-19-يومي","","2800","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"أيس #18 (يومي)","أيس-18-يومي","","2799","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"لومير براون #17 (يومي)","لومير-براون-17-يومي","","2798","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"لومير جرين #16 (يومي)","لومير-جرين-16-يومي","","2797","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"كريمي #15 (يومي)","كريمي-15-يومي","","2796","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"كات أي #14 (يومي)","كات-أي-14-يومي","","2795","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"سكاي #13 (يومي)","سكاي-13-يومي","","2794","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"توباز #12 (يومي)","توباز-12-يومي","","2793","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"دايموند #11 (يومي)","دايموند-11-يومي","","2792","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Uncategorized","","","","","",""
"ميدوسا #10 (يومي)","ميدوسا-10-يومي","","2791","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"صن كيس #9 (يومي)","صن-كيس-9-يومي","","2790","","","Published","","0","2025-02-13 07:58:37","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"شوارفسكي #8 (يومي)","شوارفسكي-8-يومي","","2789","","","Published","","0","2025-02-13 07:58:36","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"صابرين جراي #7 (يومي)","صابرين-جراي-7-يومي","","2788","","","Published","","0","2025-02-13 07:58:36","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"صابرين سول #6 (يومي)","صابرين-سول-6-يومي","","2787","","","Published","","0","2025-02-13 07:58:36","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"صابرين جراي جرين #5 (يومي)","صابرين-جراي-جرين-5-يومي","","2786","","","Published","","0","2025-02-13 07:58:36","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"سولتير #4 (يومي)","سولتير-4-يومي","","2785","","","Published","","0","2025-02-13 07:58:36","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"لومير جراي #3 (يومي)","لومير-جراي-3-يومي","","2724","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"لومير هازل #2 (يومي)","لومير-هازل-2-يومي","","2723","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"لومير بلو #1 (يومي)","لومير-بلو-1-يومي","","2722","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","8","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"ماربل #26","ماربل-26","","2721","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"سموكي #25","سموكي-25","","2720","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"كاف #24","كاف-24","","2719","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"هند #23","هند-23","","2718","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"تيفاني بلو #22","تيفاني-بلو-22","","2717","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"كراميل #21","كراميل-21","","2716","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"أكوا #20","أكوا-20","","2715","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"أيس #18","أيس-18","","2714","","","Published","","0","2025-02-13 07:58:28","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"لومير براون #17","لومير-براون-17","","2713","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"لومير جرين #16","لومير-جرين-16","","2712","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"كريمي #15","كريمي-15","","2711","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"كات أي #14","كات-أي-14","","2710","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"سكاي #13","سكاي-13","","2709","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"توباز #12","توباز-12","","2708","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"دايموند #11","دايموند-11","","2707","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"ميدوسا #10","ميدوسا-10","","2706","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"صن كيس #9","صن-كيس-9","","2705","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"شوارفسكي #8","شوارفسكي-8","","2704","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"صابرين جراي #7","صابرين-جراي-7","","2703","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"صابرين سول #6","صابرين-سول-6","","2702","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"صابرين جراي جرين #5","صابرين-جراي-جرين-5","","2701","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"سولتير #4","سولتير-4","","2700","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"لومير جراي #3","لومير-جراي-3","","2699","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"لومير هازل #2","لومير-هازل-2","","2698","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"لومير بلو #1","لومير-بلو-1","","2697","","","Published","","0","2025-02-13 07:58:27","1","open","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Dahab","","","","","",""
"Avaira Vitality® Monthly clear lenses","avaira-vitality-monthly-clear-lenses","","2696","","","Published","","0","2025-02-13 07:58:27","1","closed","","","","no","no","","30","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Avira|Contact lenses","Clear Contact lenses|Medical lenses","","","","",""
"Biomedics® 55 Evolution عدد 6 عدسات بالعبوة . شهرية","biomedics-55-evolution-عدد-6-عدسات-بالعبوة-شهرية","","2695","","","Published","","0","2025-02-13 07:58:27","1","closed","","","","no","no","","25","","","","","","","","instock","no","no","","no","taxable","","","","","","","","","","img","","url","","","","simple","","Biomedics|Contact lenses","","","","","",""
`;

const lines = rawData.split('\n').filter(Boolean);
const rows = [];
let currentRow = [];
let inQuotes = false;
let currentCell = '';

const csvText = rawData;

let i = 0;
while (i < csvText.length) {
    let char = csvText[i];
    if (inQuotes) {
        if (char === '"') {
            if (i + 1 < csvText.length && csvText[i + 1] === '"') {
                currentCell += '"';
                i++;
            } else {
                inQuotes = false;
            }
        } else {
            currentCell += char;
        }
    } else {
        if (char === '"') {
            inQuotes = true;
        } else if (char === ',') {
            currentRow.push(currentCell);
            currentCell = '';
        } else if (char === '\n') {
            currentRow.push(currentCell);
            rows.push(currentRow);
            currentRow = [];
            currentCell = '';
        } else {
            currentCell += char;
        }
    }
    i++;
}
if (currentCell || currentRow.length) {
    currentRow.push(currentCell);
    rows.push(currentRow);
}

const headers = rows[0];

let catalogAdditions = '';
let i18nArAdditions = '';
let i18nEnAdditions = '';

for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length < headers.length) continue;
    
    let title = row[headers.indexOf('post_title')] || '';
    let price = row[headers.indexOf('regular_price')] || '20';
    let brand = row[headers.indexOf('tax:product_brand')] || '';
    if (brand.includes('|')) brand = brand.split('|')[0];
    if (!brand && title.toLowerCase().includes('dahab') || title.includes('دهب')) brand = 'Dahab';
    if (!brand) brand = 'Unknown';
    
    let key = "prod_" + i;
    
    catalogAdditions += `  {
    id: "cl-gen-${i}",
    category: "contacts",
    contactTone: "${title.includes('شفاف') || title.toLowerCase().includes('solution') || title.includes('محلول') ? 'transparent' : 'colored'}",
    accent: { from: "oklch(0.96 0.02 220)", to: "oklch(0.82 0.05 215)" },
    icon: Contact,
    deco: Droplet,
    key: "${key}",
    price: ${price || 20},
    rating: 4.8,
  },
`;

    i18nArAdditions += `        ${key}: { name: ${JSON.stringify(title)}, brand: ${JSON.stringify(brand)}, shop: "عدساتي", city: "عمّان", specs: "متوفر الآن" },\n`;
    i18nEnAdditions += `        ${key}: { name: ${JSON.stringify(title)}, brand: ${JSON.stringify(brand)}, shop: "My Lenses", city: "Amman", specs: "Available now" },\n`;
}

fs.writeFileSync('generated_catalog.txt', catalogAdditions);
fs.writeFileSync('generated_i18n_ar.txt', i18nArAdditions);
fs.writeFileSync('generated_i18n_en.txt', i18nEnAdditions);

console.log("Generated " + (rows.length - 1) + " products");


/*
By ICU2Vmile
扫描全能王 解锁VIP
*/

let obj = JSON.parse($response.body);
obj = {
  "ret" : "0",
  "data" : {
    "watchad_vip_chance_total" : "3",
    "pdfword_balance" : "20",
    "points_exchange_cfgrs" : {
      "CamScanner_ID_Card_Credit" : 500,
      "CamScanner_Watermarks" : 50,
      "CamScanner_CloudOCR" : 50,
      "greeting_card_5" : 600,
      "greeting_card_9" : 600,
      "CamScanner_Pdfword" : 500,
      "greeting_card_1" : 600,
      "CamScanner_Sign" : 500,
      "CamScanner_PayGreetCard_4" : 600,
      "greeting_card_10" : 600,
      "CamScanner_PayGreetCard_3" : 600,
      "greeting_card_6" : 600,
      "CamScanner_Translation" : 50,
      "greeting_card_2" : 600,
      "CamScanner_PayGreetCard_2" : 600,
      "CamScanner_CloudCap_1G" : 1000,
      "CamScanner_Profile_Card_Format" : 500,
      "CamScanner_AlbumImport" : 300,
      "CamScanner_Excel" : 500,
      "greeting_card_3" : 600,
      "CamScanner_CertMode" : 200,
      "CamScanner_Pdf2ppt" : 500,
      "CamScanner_PayGreetCard_1" : 600,
      "CamScanner_PayGreetCard_6" : 600,
      "CamScanner_Pdf2excel" : 500,
      "greeting_card_11" : 600,
      "CamScanner_NONVIP_PayGreetCard_1" : 600,
      "CamScanner_NONVIP_PayGreetCard_2" : 600,
      "greeting_card_4" : 600,
      "CamScanner_NONVIP_PayGreetCard_3" : 600,
      "CamScanner_PayGreetCard_5" : 600,
      "CamScanner_ID_Card_Authenticity" : 500
    },
    "removead" : "0",
    "no_login_ocr_balance" : "2",
    "used_points" : "0",
    "patting_balance" : "100000",
    "watchad_vip_chance" : "3",
    "immt_expy_points" : "0",
    "watermarks_balance" : 0,
    "fax_balance" : "0",
    "server_time" : "1605361343",
    "points" : "0",
    "greetcard_list" : {
      "CamScanner_NONVIP_PayGreetCard_1" : "0",
      "greeting_card_6" : "0",
      "CamScanner_NONVIP_PayGreetCard_2" : "0",
      "greeting_card_2" : "0",
      "CamScanner_NONVIP_PayGreetCard_3" : "0",
      "CamScanner_PayGreetCard_3" : "0",
      "greeting_card_9" : "0",
      "greeting_card_5" : "0",
      "CamScanner_PayGreetCard_6" : "0",
      "greeting_card_1" : "0",
      "CamScanner_PayGreetCard_1" : "0",
      "greeting_card_10" : "0",
      "greeting_card_4" : "0",
      "CamScanner_PayGreetCard_4" : "0",
      "CamScanner_PayGreetCard_2" : "0",
      "greeting_card_3" : "0",
      "greeting_card_11" : "0",
      "CamScanner_PayGreetCard_5" : "0"
    },
    "trans_balance" : "1000",
    "login_ocr_balance" : "10",
    "excel_balance" : "500",
    "psnl_vip_property" : {
      "initial_tm" : "1605360038",
      "auto_renewal" : true,
      "ms_first_pay" : 0,
      "pending" : 0,
      "group2_paid" : 0,
      "nxt_renew_tm" : "1605619234",
      "inherited_flag" : 0,
      "level_info" : {

      },
      "group1_paid" : 1,
      "expiry" : "1605622834",
      "ys_first_pay" : 0,
      "grade" : 2,
      "last_payment_method" : "appstore",
      "renew_method" : "appstore"
    },
    "upload_pdf_balance" : "100000",
    "ocr_balance" : 1002
  }
};
$done({body: JSON.stringify(obj)});

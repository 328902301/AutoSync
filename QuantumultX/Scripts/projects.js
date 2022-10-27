var obj = JSON.parse($response.body);
var appName = obj.receipt.appName;

if (appName == me.shuifeng.Filebox) {
    obj = {
        "entries": {
            "verify_receipt": false,
            "reset_pro_if_transcation_id_missing": true,
            "set_fake_pro_when_loading_offers_failed": true,
            "verify_receipt_with_firebase": false,
            "check_receipt_data": true,
            "refresh_receipt_on_restore_purchase": false,
            "check_transcation_id_white_list": ,
            "enable_dandanplay": true,
            "refresh_receipt_on_purchasing": false,
            "verify_product_identifier": true,
            "clean_etag_when_loading_offsers_failed": true,
            "blacklist": {
                "list": ["4A1F2998-3BBF-4684-85DD-241D89D312D5", "4C2303D1-268A-4F5D-B330-5213EF67147A", "56EF1759-C9D2-474D-87A8-CD1BD21421D7", "670B66F1-312B-4222-95AC-67082E6CAD63", "6D48BBC2-D04B-47CD-9F53-1D9E559CDF78", "91897063-6344-4E0A-951C-0F212CED5078", "BED9911F-17EF-41E5-AF12-DA014AB8194F", "F22B0BF0-09D1-4CBA-992B-3D3C6F804CE1"]
            },
            "detect_malformed": false,
            "recheck_receipt_on_restore_purchase": true,
            "library_search_movie": {
                "enable": true,
                "source": "tmdb"
            },
            "enable_search_lyrics": false
        },
        "appName": me.shuifeng.Filebox,
        "state": UPDATE,
        "templateVersion": 34
    }
};
if (appName == com.gingerlabs.Notability) {
    obj = {
        "entries": {
            "onboardingTours": on,
            "subscriptionModalAsPromo": on,
            "subscription_modal_features": ["unlimitedEdits", "icloud", "autobackup", "handwritingRecognition", "premiumFeatures", "favoriteTools", "ruler", "favoriteNotes", "mathConversion", "planners", "stickerPacks", "themes", "journals"],
            "yearly_sub": true,
            "invalidTouchRecognizer": on
        },
        "appName": com.gingerlabs.Notability,
        "state": UPDATE,
        "templateVersion": 21
    }
};

$done({
    body: JSON.stringify(obj)
});
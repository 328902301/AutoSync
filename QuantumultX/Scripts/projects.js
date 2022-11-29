var obj = JSON.parse($response.body);
var appName = obj.receipt.appName;

if (appName == me.shuifeng.Filebox) {
    obj = {
        "entries": {
            "verify_receipt": false,
            "reset_pro_if_transcation_id_missing": false,
            "set_fake_pro_when_loading_offers_failed": false,
            "verify_receipt_with_firebase": false,
            "check_receipt_data": false,
            "check_transcation_id_white_list": ,
            "enable_dandanplay": true,
            "verify_product_identifier": false,
            "clean_etag_when_loading_offsers_failed": false,
            "blacklist": {
                "list": []
            },
            "detect_malformed": false,
            "library_search_movie": {
                "enable": true,
                "source": "tmdb"
            },
            "enable_search_lyrics": false
        },
        "appName": me.shuifeng.Filebox,
        "state": UPDATE,
        "templateVersion": 42
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

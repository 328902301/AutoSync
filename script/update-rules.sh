#!/bin/sh
LC_ALL='C'
AA="Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5 Quark/2.4.2.986"
rm *.txt
rm -rf md5 tmp
wait
# Create temporary folder
echo '新建TMP文件夹...'
mkdir -p ./tmp/
cd tmp
echo '新建TMP文件夹完成'

# Start Download Filter File
echo '开始下载规则...'
easylist_lite=(  
  #乘风视频广告规则
  "https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/mv.txt" 
  #大萌主针的盗版网站的规则
  "https://raw.githubusercontent.com/damengzhu/banad/main/jiekouAD.txt" 
  #Noyllopa的去APP下载按钮
  "https://raw.githubusercontent.com/Noyllopa/NoAppDownload/master/NoAppDownload.txt" 
  #中文过滤器
  "https://easylist-downloads.adblockplus.org/easylistchina.txt"
  "https://filters.adtidy.org/extension/ublock/filters/224.txt" 
  #cjx
  "https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjx-annoyance.txt"
  #anti-anti-ad
  "https://raw.githubusercontent.com/reek/anti-adblock-killer/master/anti-adblock-killer-filters.txt"
  "https://easylist-downloads.adblockplus.org/antiadblockfilters.txt"
  "https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt"
)

easylist=( 
  #乘风视频广告规则
  "https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/mv.txt" 
  #大萌主针的盗版网站的规则
  "https://raw.githubusercontent.com/damengzhu/banad/main/jiekouAD.txt" 
  #Clean Url 扩展的规则
  "https://raw.githubusercontent.com/DandelionSprout/adfilt/master/ClearURLs%20for%20uBo/clear_urls_uboified.txt" 
  "https://raw.githubusercontent.com/DandelionSprout/adfilt/master/LegitimateURLShortener.txt" 
  #Noyllopa的去APP下载按钮
  "https://raw.githubusercontent.com/Noyllopa/NoAppDownload/master/NoAppDownload.txt" 
  #防跟踪保护过滤器
  "https://filters.adtidy.org/extension/ublock/filters/3_optimized.txt"
  "https://easylist-downloads.adblockplus.org/easyprivacy.txt"
  #中文过滤器
  "https://easylist-downloads.adblockplus.org/easylistchina.txt"
  "https://filters.adtidy.org/extension/ublock/filters/224.txt" 
  #英文过滤器 优化版
  "https://filters.adtidy.org/extension/ublock/filters/2_optimized.txt"
  #cjx
  "https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjx-annoyance.txt"
  #anti-anti-ad
  "https://raw.githubusercontent.com/reek/anti-adblock-killer/master/anti-adblock-killer-filters.txt"
  "https://easylist-downloads.adblockplus.org/antiadblockfilters.txt"
  "https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt"
)

easylist_plus=(
  #ubo烦人过滤器
  "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/annoyances.txt" 
  #UBO危险软件
  "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/badware.txt" 
  #ubo基础过滤器
  "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt" 
  #ubo隐私保护
  "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/privacy.txt" 
  #adg基础过滤器
  "https://filters.adtidy.org/windows/filters/2.txt" 
  #adg移动设备过滤器
  "https://filters.adtidy.org/windows/filters/11.txt" 
  #adg防跟踪
  "https://filters.adtidy.org/windows/filters/3.txt" 
  #adg中文过滤器
  "https://filters.adtidy.org/windows/filters/224.txt" 
  #adg烦人过滤器
  "https://filters.adtidy.org/windows/filters/14.txt" 
  #adg社交过滤器
  "https://filters.adtidy.org/windows/filters/4.txt" 
  #adgURL过滤器
  "https://filters.adtidy.org/windows/filters/17.txt"  
)

dns=(
  #Social
  "https://filters.adtidy.org/windows/filters/4.txt"
  #Annoying
  "https://filters.adtidy.org/windows/filters/14.txt"
  "https://easylist-downloads.adblockplus.org/fanboy-annoyance.txt"
  #Mobile Ads
  "https://filters.adtidy.org/windows/filters/11.txt"
  #Chinese and English
  "https://filters.adtidy.org/windows/filters/2.txt"
  "https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt"
  "https://filters.adtidy.org/windows/filters/224.txt" 
  #Fuck Tracking
  "https://easylist-downloads.adblockplus.org/easyprivacy.txt"
  "https://filters.adtidy.org/windows/filters/3.txt"
  #anti-coin
  "https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt"
  #scam
  "https://raw.githubusercontent.com/durablenapkin/scamblocklist/master/adguard.txt"
  #anti-windows-spy
  "https://raw.githubusercontent.com/crazy-max/WindowsSpyBlocker/master/data/hosts/spy.txt"
  #hacamer
  "https://raw.githubusercontent.com/hacamer/AdRule/main/dns.txt"
  #坂本大佬
  "https://raw.githubusercontent.com/banbendalao/ADgk/master/ADgk.txt"
  #乘风视频广告
  "https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/mv.txt" 
  #uBO
  "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/annoyances.txt" 
  "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/badware.txt" 
  "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt"
  "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/privacy.txt"
  #cjx
  "https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjx-annoyance.txt"
  "https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjxlist.txt"
  #anti-anti-ad
  "https://raw.githubusercontent.com/reek/anti-adblock-killer/master/anti-adblock-killer-filters.txt"
  "https://easylist-downloads.adblockplus.org/antiadblockfilters.txt"
  "https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt"
)

hosts=(
  #adaway
  "https://adaway.org/hosts.txt"
  #ad-wars
  "https://raw.githubusercontent.com/jdlingyu/ad-wars/master/hosts"
)



for i in "${!easylist[@]}" "${!easylist_lite[@]}" "${!easylist_plus[@]}" "${!hosts[@]}" "${!dns[@]}" 
do
  curl --parallel --parallel-immediate -k -L -C - -o "easylist${i}.txt" --connect-timeout 30 -s "${easylist[$i]}" |iconv -t utf-8 &
  curl --parallel --parallel-immediate -k -L -C - -o "plus-easylist${i}.txt" --connect-timeout 30 -s "${easylist_plus[$i]}"  |iconv -t utf-8 &
  curl --parallel --parallel-immediate -k -L -C - -o "lite-easylist${i}.txt" --connect-timeout 30 -s "${easylist_lite[$i]}"  |iconv -t utf-8 &
  curl --parallel --parallel-immediate -k -L -C - -o "dns${i}.txt" --connect-timeout 30 -s "${dns[$i]}" |iconv -t utf-8 &
  curl --parallel --parallel-immediate -k -L -C - -o "hosts${i}.txt" --connect-timeout 30 -s "${hosts[$i]}" |iconv -t utf-8 &
  # shellcheck disable=SC2181
done
wait

echo '规则下载完成'

# 添加空格
file="$(ls|sort -u)"
for i in $file; do
  echo -e '\n\n\n' >> $i &
done
wait
# Pre Fix rules
echo '处理规则中...'

# Start Merge and Duplicate Removal

echo 开始合并

#处理主规则
cat .././mod/rules/adblock-rules.txt easylist*.txt \
 | grep -Ev "^((\!)|(\[)).*" \
 | sort -n | uniq >> tmp-adblock.txt  

#处理Plus规则
cat tmp-adblock.txt plus*easylist*.txt \
 |grep -Ev "^((\!)|(\[)).*" | grep -v 'local.adguard.org' \
 | sort -u |grep -v '^ '| sort -n | uniq | awk '!a[$0]++' > tmp-adblock_plus.txt  

#Lite
cat .././mod/rules/adblock-rules.txt lite-*.txt \
 |grep -Ev "^((\!)|(\[)).*" \
 | sort -n | uniq | awk '!a[$0]++' > tmp-adblock_lite.txt

#处理DNS级别规则
bash ../script/rebuilt-dns-list.sh
wait

cd ../tmp/
mv ../{dns.txt,hosts.txt,ad-domains.txt} ./
rename 's/^/tmp-/' dns.txt hosts.txt ad-domains.txt
sed -i 's/^\!.*//g' tmp-dns.txt tmp-hosts.txt tmp-ad-domains.txt
sed -i 's/^\#.*//g' tmp-dns.txt tmp-hosts.txt tmp-ad-domains.txt
sed -i '/^$/d' tmp-dns.txt tmp-hosts.txt tmp-ad-domains.txt
rm -f ../{dns.txt,hosts.txt,ad-domains.txt}


echo 规则合并完成
# Move to Pre Filter
echo '移动规则到Pre目录'
cd ../
mkdir -p ./pre/
cp ./tmp/tmp-*.txt ./pre
cd ./pre
echo '移动完成'


# Start Add title and date
diffFile="$(ls|sort -u)"
for i in $diffFile; do
 python .././script/rule.py $i
 n=`cat $i | wc -l` 
 echo "! Version: $(TZ=UTC-8 date +'%Y-%m-%d %H:%M:%S')(GMT+8) " >> tpdate.txt 
 new=$(echo "$i" |sed 's/tmp-//g') 
 echo "! Total count: $n" > $i-tpdate.txt 
 cat ./tpdate.txt ./$i-tpdate.txt ./$i |grep -Ev "^(\|)*(\.)?com(\^)?$" > ./$new 
 rm $i *tpdate.txt 
done

echo '规则添加统计数据完成'
# Add Title and MD5
cd ../
mkdir -p ./md5/
diffFile="$(ls pre |sort -u)"
for i in $diffFile; do
 titleName=$(echo "$i" |sed 's#.txt#-title.txt#') 
 cat ./mod/title/$titleName ./pre/$i | awk '!a[$0]++'> ./$i 
 sed -i '/^$/d' $i 
 md5sum $i | sed "s/$i//" > ./md5/$i.md5 
 perl ./script/addchecksum.pl ./$i &
 iconv -t UTF-8 $i > tmp-$i
 mv -f tmp-$i $i
 #echo "合并${i}的标题中"
done
wait
echo '规则处理完成'
sed -i 's/!/#/g' hosts.txt
rm -rf pre tmp
exit

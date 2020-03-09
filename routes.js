const checksum_lib=  require('./paytm/checksum/checksum');
const port =3000;

module.exports= (app)=>{
    app.get('/payment',(req,res)=>{
        let params = {};
        
        params['MID'] ='UFDOXs30620495877526',
        params['WEBSITE']='WEBSTAGING',
        params['CHANNEL_ID'] = 'WEB',
        params['INDUSTRY_TYPE_ID']= 'Retail',
        params['ORDER_ID']= 'ORD0006',
        params['CUST_ID']= 'CUST0011',
        params['TXN_AMOUNT']= '1',
        params['CALLBACK_URL']= 'http://localhost:3000/callback',
        params['EMAIL']= 'siddharth0sinha@gmail.com',
        params['MOBILE_NO']= '8076433986',

        checksum_lib.genchecksum(params,'ZIHZ_lhDJ3z3SeyC',function(err,checksum){
            let txn_url   = "https://securegw-stage.paytm.in/order/process";
            
            res.render('form',{params: params, url: txn_url, checksum: checksum });
        });
    })
}
module.exports={
    devServer:{
        host:'localhost',
        port:8080,  
        proxy:{   //代理
            '/api':{
                target:'https://movie.douban.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }

    }
}
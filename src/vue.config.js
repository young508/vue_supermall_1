module.exports={
    configureWebpack:{
        resolve:{
            alias:{//进行别名配置
                // '@':'src',
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
                'router':'@/router',
                'store':'@/store'


            }
        }
    }
}
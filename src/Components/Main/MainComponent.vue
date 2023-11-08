<script>
export default {
    name: 'MainComponent',
}
</script>

<template>
  <div>main</div>
</template>

<style scoped>
.main-page{
    padding-top: 60px;
    background-color: #fff;
}

.main-info__list{
    margin: 0;
    padding: 0;
}

.main-info__item{
    margin: 0;
    display: flex;
    gap: 30px;
    padding: 30px 0;
    font-family: Geometria;
}

.main-info__list .main-info__item:nth-child(2){
    flex-direction: row-reverse;
}

.main-info__item-image, .main-info__item-content{
    width: calc(50% - 15px);
}

.main-info__item-title{
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;
    max-width: 520px;
    margin: 0 0 30px;
}

.main-info__item-text{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
}

.main-info__item-text p{
    margin: 0 0 15px;
}

.main-info__item-text p:nth-last-child(1){
    margin: 0;
}

.main-info__item-image{
    border-radius: 10px;
}

.main-info__item-image img{
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 320px;
    border-radius: 10px;
}

.main-info__item-text ul{
    margin: 0;
    padding: 0;
}

.main-info__item-text ul li{
    margin: 0 0 10px;
    padding: 0;
    list-style-type: none;
}

.main-joined{
    padding: 30px 0 46px;
    font-family: Geometria;
}

.main-joined__title{
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: center;
    margin: 30px 0 45px;
}

.main-joined__list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    margin: 0;
    padding: 0;
}

.main-joined__item{
    text-align: center;
    list-style-type: none;
}

.main-joined__item{
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: center;

}

.main-joined__list-title{
    font-size: 60px;
    font-weight: 700;
    letter-spacing: 0em;
    color: #44A7BA;
    margin: 0 0 15px;
}

.main-joined__btn{
    display: block;
    margin: 60px auto 0;
    padding: 15px 30px 15px 30px;
    border-radius: 30px;
    background-color: #44A7BA;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0em;
    cursor: pointer;
    border: none;
    outline: 0;
}

@media (max-width: 1024px) {
    .main-info__item-image{
        width: calc(40% - 15px);
    }

    .main-info__item-image img{
        height: 314px;
    }

    .main-info__item-content{
        width: calc(60% - 15px);
    }

    .main-info__item-title{
        font-size: 32px;
    }
}

@media (max-width: 768px) {
    .main-info__item{
        padding: 30px 0 11px;
    }

    .main-info__item-image{
        display: none;
    }

    .main-info__item-content{
        width: 100%;
    }

    .main-info__item-title{
        font-size: 24px;
        margin: 0 0 15px;
    }

    .main-info__item-text{
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0em;
    }

    .main-joined__list{
        grid-template-columns: 100%;
    }

    .main-joined__title{
        margin-bottom: 15px;
    }

    .main-joined__item{
        text-align: left;
    }

    .main-joined__list-title, .main-joined__item{
        display: inline;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
    }

    .main-joined__btn{
        margin: 30px auto 0;
    }


}
</style>

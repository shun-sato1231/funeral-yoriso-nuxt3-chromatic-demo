<template>
  <div>
    <header class="modal__header py-2 justify-space-around">
      <p class="mb-0 mt-1 body-1 text-center">お亡くなり・ご危篤の場合</p>
      <v-icon class="my-1" @click="$emit('close-modal')">fa-close</v-icon>
    </header>
    <hr class="common-hrDotted" />
    <div class="modal__scrollBox">
      <div class="modal__content">
        <div class="l-contentBox">
          <div class="l-modalContentBox__module">
            <div class="modalurgency-title">
              <strong class="modalurgency-title__textBox">
                <v-icon left color="error" size="25" class="ml-2"
                  >fa-exclamation-triangle</v-icon
                >
                <p class="modalurgency-title__textStrong mb-0 ml-1">
                  病院やご自宅まで、1時間程度でお迎えいたします
                </p>
              </strong>
              <div class="modalurgency-title__imgBox">
                <img
                  src="/img/common/lady/img_common_thumbnail_operator.webp"
                  class="common-imageFull--circle"
                  alt="よりそうオペレーター"
                  width="80"
                  height="80"
                />
              </div>
            </div>
            <div class="l-modalContentBox__moduleBody">
              <div class="utilctaButtonTel">
                <a :href="'tel:' + phone" class="utilctaButtonTel__inner">
                  <div class="utilctaButtonTel__textBox">
                    <p
                      class="utilctaButtonTel__buttonText mb-0 font-weight-bold body-3"
                    >
                      ここをタッチして今すぐ電話をかける
                    </p>
                    <v-icon class="mb-4" size="24" color="white"
                      >fa-phone</v-icon
                    >
                    <a :href="'tel:' + phone" class="utiltel--large">{{
                      phone
                    }}</a>
                    <div class="utilctaButtonTel__infoLabelList">
                      <ul class="utilctalabel">
                        <li>通話・相談無料</li>
                        <li>24時間365日対応</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="l-modalContentBox__moduleBody">
              <div class="modalurgency-credit">
                <div class="utilcreditcard d-flex justify-space-around">
                  <p class="mb-0 caption">カード決済対応</p>
                  <div class="utilcreditcard__img">
                    <img
                      width="178"
                      height="21"
                      src="/img/plan/img_creditcard.webp"
                      :alt="$const.view.creditcardText"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="l-modalContentBox__module">
            <div class="pa-4 accentLighten">
              <h4 class="modal-subTitle">
                深夜・早朝でもご遠慮なくお電話ください
              </h4>
              <ul class="modal-list--withIcon mt-4">
                <li>
                  現地スタッフが、ご指定の場所まで迅速にお迎えにあがります
                </li>
                <li>故人さまのご遺体を、ご自宅や安置所まで搬送いたします</li>
                <li>お葬式の費用をわかりやすくご案内します</li>
              </ul>
            </div>
            <p class="text-right mt-2">
              <v-icon class="mr-2" size="16">fa-caret-right</v-icon>
              <a :href="$to('/urgency/')" class="hyper-link">詳細をみる</a>
            </p>
          </div>
        </div>
      </div>
      <footer class="modal__footer">
        <v-btn class="common-button--stone" @click="$emit('close-modal')">
          <v-icon class="mr-2">fa-close</v-icon>
          閉じる
        </v-btn>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      phone: 'common/config/phone',
    }),
  },
};
</script>

<style lang="scss">
.utiltel--large {
  text-decoration: none !important;
  color: white !important;
  font-size: 40px;
  font-family: Roboto, Arial, Helvetica;
  font-weight: 400 !important;
}
.common-hrDotted {
  border: none;
  background: none;
  width: 100%;
  border-top: 1px dotted #ccc;
}
.modal__header {
  position: relative;
  border-bottom: 1px dotted #ccc;
  background: #fbfaf5;
  height: 62px;
}
.modal__scrollBox {
  overflow: scroll;
  .modal__content {
    display: block;
    line-height: 1.5;
    color: #545458;
    overflow: scroll;
    .l-contentBox {
      padding-top: 20px;
      padding-bottom: 10px;
      .l-modalContentBox__module {
        margin-bottom: 20px;
        padding-left: 15px;
        padding-right: 15px;
        .modalurgency-title {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex-line-pack: stretch;
          align-content: stretch;
          .modalurgency-title__textBox {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            color: #545458;
            font-weight: 700;
            .modalurgency-title__textStrong {
              font-size: 18px;
              font-weight: 700;
            }
            a {
              text-decoration: none;
              outline: none;
              color: #545458;
            }
            .utilctaButtonTel__textBox {
              color: #fff;
            }
          }
          .modalurgency-title__imgBox {
            min-width: 80px;
            width: 80px;
            height: 80px;
            margin-left: 10px;
            border-radius: 100%;
            background: #fbfaf5;
            .common-imageFull--circle {
              border-radius: 100%;
              overflow: hidden;
            }
          }
        }
        .l-modalContentBox__moduleBody {
          padding-top: 15px;
          .utilctaButtonTel__inner {
            color: white;
            padding: 10px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
            -ms-flex-line-pack: stretch;
            align-content: stretch;
            text-align: center;
            border-radius: 5px;
            box-shadow: inset 0 -6px 0 rgb(84 84 88 / 50%);
            text-decoration: none !important;
            list-style: none;
            height: 130px;
            background: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(0, 0, 0, 0.05)),
              color-stop(50%, hsla(0, 0%, 100%, 0.1)),
              to(rgba(0, 0, 0, 0.05))
            );
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.05) 0,
              hsla(0, 0%, 100%, 0.1) 50%,
              rgba(0, 0, 0, 0.05)
            );
            background-color: #c25155;
            .utilctalabel {
              font-size: 12px;
              li {
                display: inline-block;
                text-align: center;
                line-height: 1.8;
                border: 1px solid #ccc;
                background: #fff;
                border-radius: 3px;
                padding: 0 0.5em;
                color: var(--v-primaryText-base);
              }
            }
          }
        }
        .modal-subTitle,
        .modal-subTitle--withIcn {
          font-weight: 700;
          font-size: 18px;
        }
        .modal-list--withIcon {
          list-style-type: none;
          li {
            position: relative;
            line-height: 1.8;
          }
          li::after {
            content: '';
            display: block;
            position: absolute;
            top: 0.5em;
            left: -1.5em;
            width: 13px;
            height: 8px;
            border-left: 2px solid #ce7b4c;
            border-bottom: 2px solid #ce7b4c;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
}
.modal__footer {
  text-align: center;
  .common-button--stone {
    background: #f3f0e4;
    max-width: 345px;
    width: 100%;
    line-height: 1;
    display: block;
    font-weight: 700;
    font-size: 18px;
    padding: 0.75em 1.75em 0.85em;
    text-align: center;
    color: #545458;
    border: 1px solid #e7e0ba;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: inset 0 -4px 0 rgb(84 84 88 / 40%);
  }
}
</style>

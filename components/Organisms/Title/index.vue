<template>
  <div class="header-box">
    <div class="content flex-box">
      <h1>
        <strong class="header-title" v-text="title" v-if="title" />
        <slot v-if="$scopedSlots.default" />
        <span v-else>
          <span class="description" v-if="description">
            {{ description }}
          </span>
        </span>
      </h1>

      <div class="hidden-xs pc">
        <v-img
          src="/img/illust/yellow/illust_saidan.webp"
          alt="祭壇"
          width="180"
          height="80"
          class="img-saidan"
        />
        <v-img
          src="/img/area/img-nhk-circle.webp"
          alt="NHKで紹介"
          width="130"
          height="130"
          class="img-nhk"
        />
      </div>
      <div class="hidden-sm-up sp">
        <v-img
          src="/img/common/lady/img_common_main_operator_sp.webp"
          alt="よりそうお葬式オペレーター"
          width="85"
          height="126"
          class="img-operator"
        />
        <div class="nhk-cercle">
          <v-img
            src="/img/area/icon-nhk_sp.webp"
            alt="NHKで紹介"
            width="48"
            height="21.6"
            class="img-nhk-sp"
          />
          <div class="nhk-text-sp">で紹介</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    subDescription: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.header-box {
  background: #fbfaf5;
  position: relative;
  @include md-down {
    height: 140px;
    padding: 20px 15px;
    border-bottom: 1px solid rgb(var(--v-theme-accentLighten3));
  }
  @include md-up {
    height: 160px;
    padding: 30px 0;
  }
  .content {
    position: relative;
    .header-title {
      font-size: 45px;
      font-weight: 700;
      display: block;
      border-left: 8px solid rgb(var(--v-theme-primary));
      padding-left: 15px;
      line-height: 1.1;
      margin-bottom: 10px;
    }
    .pc {
      .img-saidan {
        position: absolute;
        right: 90px;
        @include sm-up {
          top: 21px;
        }
        @include sm-down {
          top: 20px;
        }
      }
      .img-nhk {
        position: absolute;
        right: 0px;
        @include sm-up {
          top: -18px;
        }
        @include sm-down {
          top: -15px;
        }
      }
    }
    .sp {
      .img-operator {
        position: absolute;
        top: -7px;
        right: 0px;
      }
      .nhk-cercle {
        position: absolute;
        right: 17px;
        top: 52px;
        background: white;
        border-radius: 50%;
        width: 62px;
        height: 62px;
        .img-nhk-sp {
          position: absolute;
          top: 15px;
          right: 7px;
        }
        .nhk-text-sp {
          position: absolute;
          top: 37px;
          right: 15px;
          font-size: 11px;
        }
      }
    }
  }
}
</style>

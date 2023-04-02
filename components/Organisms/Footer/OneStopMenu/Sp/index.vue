<template>
  <div>
    <div class="title body-1 mb-2 mx-4">
      よりそうは終活や葬儀の不安をワンストップでサポートします
    </div>

    <div class="footer-scrollerX__body">
      <ol class="footer-colmun">
        <li
          v-for="(oneStopMenu, oneStopMenuIndex) in oneStopMenus"
          :key="oneStopMenuIndex"
          class="footer-colmun__service"
        >
          <dl class="footer-service">
            <dt>
              <strong class="footer-service__label">{{
                oneStopMenu.title
              }}</strong
              >のこと<span
                v-if="selectMenuIndex === oneStopMenuIndex"
                class="footer-service__here"
                >現在地</span
              >
              <span class="footer-service__sankaku"></span>
            </dt>
            <dd>
              <ul class="common-panelList">
                <li
                  v-for="(
                    oneStopMenuItem, oneStopMenuItemIndex
                  ) in oneStopMenu.items"
                  :key="oneStopMenuItemIndex"
                >
                  <a class="common-panel fz16" :href="oneStopMenuItem.href"
                    ><i class="fas fa-caret-right common-link__icon"></i
                    >{{ oneStopMenuItem.title }}</a
                  >
                </li>
              </ul>
            </dd>
          </dl>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectMenuIndex: 0,
      oneStopMenus: [
        {
          title: 'お葬式',
          items: [
            { href: '/sogi/category/sogi/', title: '基礎知識' },
            { href: '/sogi/', title: 'お葬式' },
            { href: '/sogi/ofuse/', title: '葬儀読経・戒名授与' },
          ],
        },
        {
          title: '法事・法要',
          items: [
            { href: '/sogi/category/hoji-hoyo/', title: '基礎知識' },
            {
              href: '/obosan/',
              title: '年忌法要',
            },
            {
              href: '/obosan/kaimyou/',
              title: '戒名授与',
            },
          ],
        },
        {
          title: '仏壇・仏具',
          items: [
            { href: '/sogi/category/butsudan/', title: '基礎知識' },
            {
              href: '/butsudan/ihai/',
              title: '位牌',
            },
            {
              href: '/butsudan/butsudan/',
              title: '仏壇',
            },
            {
              href: '/butsudan/butsugu/',
              title: '仏具',
            },
          ],
        },
        {
          title: '納骨・散骨',
          items: [
            { href: '/sogi/category/ohaka/', title: '基礎知識' },
            {
              href: 'https://ohaka.minrevi.jp/',
              title: '墓地・霊園',
            },
            {
              href: '/eitaikuyo/',
              title: '永代供養墓',
            },
            {
              href: '/kaiyo/',
              title: '海洋散骨',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-application a {
  color: #48484b;
  font-size: 16px;
  line-height: 1;
  text-decoration: none;
}
.v-application ul {
  padding-left: 10px;
}
.footer-scrollerX__body {
  overflow-y: hidden !important;
  overflow-x: scroll !important;
  -webkit-overflow-scrolling: touch;
  height: 250px;

  .footer-colmun {
    list-style-type: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    width: 859px;
    padding: 0 15px;
    dd li {
      list-style: none;
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      &:last-child {
        border-bottom: none;
      }
    }
    dt {
      height: 38px;
      line-height: 38px;
      font-size: 14px;
      background: #f3f0e4;
      font-weight: 700;
      padding-left: 12px;
      margin-right: 21px;
      position: relative;
    }
    .common-link__icon {
      margin-right: 5px;
    }
    .footer-colmun__service {
      width: 196px;
      min-width: 196px;
    }
    .footer-service__label {
      font-size: 16px;
      font-weight: inherit;
    }
    .footer-service__sankaku {
      width: 21px;
      height: 100%;
      position: absolute;
      right: -21px;
      top: 0;
      overflow: hidden;
      &:before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-bottom: 100px solid #f3f0e4;
        border-right: 50px solid transparent;
      }
    }
    .footer-service__here {
      display: inline-block;
      margin-left: 0.5em;
      font-weight: inherit;
      padding: 0 0.75em;
      font-size: 12px;
      line-height: 23px;
      background: #f3d45b;
      border-radius: 90px;
      position: absolute;
      top: 8px;
    }
  }
}
</style>

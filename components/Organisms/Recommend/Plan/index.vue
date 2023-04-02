<template>
  <div class="content">
    <div class="hidden-sm-down">
      <h3 class="subtitle">以下のお葬式プランからお選びいただけます</h3>
      <!-- プラン一覧 -->
      <OrganismsRecommendPlanList
        :funeralPlans="funeralPlans"
        class="py-5"
        @click="$emit('click')"
      />
    </div>
    <div class="hidden-md-up mt-8">
      <v-card color="accentLighten2" flat tile>
        <v-card-actions class="justify-center">
          <div class="pr-3">
            <v-img
              src="/img/illust/yellow/illust_sodan.webp"
              alt="オペレーター"
              height="60"
              width="52"
            />
          </div>
          <div>
            <h3 class="text-h5">明朗会計セットプラン</h3>
          </div>
        </v-card-actions>
      </v-card>

      <v-card color="secondary" flat class="py-5 mb-5">
        <!-- プラン一覧 -->
        <OrganismsRecommendPlanList
          :funeralPlans="funeralPlans"
          @click="$emit('click')"
        />
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    funeralPlans: {
      type: Array,
    },
  },
};
</script>

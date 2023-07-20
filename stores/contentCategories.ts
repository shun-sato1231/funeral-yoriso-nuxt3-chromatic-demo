import { defineStore } from 'pinia';

export const useContentCategoriesStore = defineStore('contentCategory', () => {
  const state = reactive({
    contentCategories: [
      {
        name: '法事・法要',
        icon: '',
        code: 'hoji-hoyo',
        parent_id: null,
      },
      {
        name: '仏壇・仏具',
        icon: '',
        code: 'butsudan',
        parent_id: null,
      },
      {
        name: '宗教・宗派',
        icon: '',
        code: 'shukyo-all',
        parent_id: null,
      },
      { name: 'お墓・散骨', icon: '', code: 'ohaka', parent_id: null },
      { name: '相続', icon: '', code: 'sozoku-all', parent_id: null },
      { name: '用語集', icon: '', code: 'yogo-all', parent_id: null },
      { name: 'コラム', icon: '', code: 'column', parent_id: null },
      { name: '費用', icon: 'fa-yen-sign', code: 'hiyo', parent_id: 1 },
      {
        name: 'お葬式の流れ',
        icon: 'fa-angle-double-right',
        code: 'nagare',
        parent_id: 1,
      },
      {
        name: '宗教・宗派',
        icon: 'fa-praying-hands',
        code: 'sogi-shurui',
        parent_id: 1,
      },
      {
        name: '服装',
        icon: 'fa-user-tie',
        code: 'fukuso',
        parent_id: 1,
      },
      {
        name: 'マナー',
        icon: 'fa-comment',
        code: 'sogi-manners',
        parent_id: 1,
      },
      {
        name: '葬儀後の流れ',
        icon: 'fa-pen',
        code: 'sogigo',
        parent_id: 1,
      },
      { name: '家族葬とは', icon: '', code: 'kazokuso-matome', parent_id: 1 },
      { name: '家族葬の費用', icon: '', code: 'kazokuso-hiyou', parent_id: 1 },
      { name: '家族葬の流れ', icon: '', code: 'kazokuso-nagare', parent_id: 1 },
      {
        name: '家族葬の服装',
        icon: '',
        code: 'kazokuso-fukusou',
        parent_id: 1,
      },
    ],
  });

  return {
    ...toRefs(readonly(state)),
  };
});

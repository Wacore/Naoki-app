export const loadMenu = async () => {
  const response = await menuApi.getMenu();
  if (!response.ok) return dispatch(setMenuItemError(true));

  // dispatch(setMenuItemError(true));
  // dispatch(getMenuItems(response.data));

  const menuItems = useSelector((state) => state.menuItems);

  // todo: using lodash to create different kinds of menu
};

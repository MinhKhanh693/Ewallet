import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: { isOpenModalTransfers: { is: false, name: "" } },
  reducers: {
    setIsOpenModalTransfers: (state, action) => {
      state.isOpenModalTransfers.is = action.payload.is;
      state.isOpenModalTransfers.name = action.payload.name;
    },
  },
});
//Actions
const dashboardActions = dashboardSlice.actions;
// selectors
const selectIsOpenModalTransfers = (state) =>
  state.dashBoard.isOpenModalTransfers;
// reducer
const dashboardReducer = dashboardSlice.reducer;

export default dashboardReducer;
export { dashboardActions, selectIsOpenModalTransfers };

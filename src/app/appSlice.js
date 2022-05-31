import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    totalRemainder: 900.87,
    totalExpenditure: 0,
    totalRevenue: 0,
    history: [
      {
        key: 1,
        dateTime: "2022-06-24 09:50:22",
        name: "Quốc Khánh",
        amount: 30.7,
        category: "Transfer",
      },
      {
        key: 2,
        dateTime: "2022-06-22 09:50:22",
        name: "Viettel",
        amount: 20.2,
        category: "Wifi",
      },
      {
        key: 3,
        dateTime: "2022-06-18 09:50:22",
        name: "Electricity",
        amount: 100.8,
        category: "Electricity",
      },
      {
        key: 4,
        dateTime: "2022-06-12 09:50:22",
        name: "Water",
        amount: 16.5,
        category: "Water",
      },
      {
        key: 5,
        dateTime: "2022-05-25 09:50:22",
        name: "DH.THỦ DẦU MỘT",
        amount: 200.75,
        category: "Tuition Fees",
      },
      {
        key: 6,
        dateTime: "2022-05-22 09:50:22",
        name: "MOMO",
        amount: 160.5,
        category: "Transfer",
      },
      {
        key: 7,
        dateTime: "2022-05-18 09:50:22",
        name: "Medic",
        amount: 260.5,
        category: "Medical",
      },
      {
        key: 8,
        dateTime: "2022-05-15 09:50:22",
        name: "BIDV",
        amount: 200.76,
        category: "Transfer",
      },
      {
        key: 8,
        dateTime: "2022-05-15 09:50:22",
        name: "VinHome center park",
        amount: 200.76,
        category: "Office",
      },
    ],
  },
  reducers: {
    update: (state) => {
      state.totalExpenditure = state.history
        .map((item) => item.amount)
        .reduce((a, b) => a + b, 0);
    },
    topUp: (state, action) => {
      state.totalRemainder += action.payload;
      state.totalRevenue += action.payload;
    },
    withDrawals: (state, action) => {
      state.totalRemainder -= action.payload;
      state.totalExpenditure += action.payload;
    },
    transferMoney: (state, action) => {
      state.totalRemainder -= action.payload.amount;
      state.totalExpenditure += action.payload.amount;
      state.totalRevenue -= action.payload.amount;
      state.history.push({ key: state.history.length + 1, ...action.payload });
    },
  },
});
//Actions
const appActions = appSlice.actions;
// selectors
const selectApp = (state) => state.app;
const selectTotalRemainder = (state) => selectApp(state).totalRemainder;
const selectTotalExpenditure = (state) => selectApp(state).totalExpenditure;
const selectTotalRevenue = (state) => selectApp(state).totalRevenue;
const selectHistory = (state) => selectApp(state).history;
const appSelect = {
  selectTotalRemainder,
  selectTotalExpenditure,
  selectTotalRevenue,
  selectHistory,
};
// reducer
const appReducer = appSlice.reducer;

export default appReducer;
export { appActions, appSelect };

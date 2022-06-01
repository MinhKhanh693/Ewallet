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
        dateTime: "2022-5-24 9:50:22",
        name: "Quốc Khánh",
        amount: 30.7,
        category: "Transfer",
      },
      {
        key: 2,
        dateTime: "2022-5-22 9:50:22",
        name: "Viettel",
        amount: 20.2,
        category: "Wifi",
      },
      {
        key: 3,
        dateTime: "2022-5-18 9:50:22",
        name: "Electricity",
        amount: 100.8,
        category: "Electricity",
      },
      {
        key: 4,
        dateTime: "2022-5-12 9:50:22",
        name: "Water",
        amount: 16.5,
        category: "Water",
      },
      {
        key: 5,
        dateTime: "2022-5-25 9:50:22",
        name: "DH.THỦ DẦU MỘT",
        amount: 200.75,
        category: "Tuition Fees",
      },
      {
        key: 6,
        dateTime: "2022-5-22 9:50:22",
        name: "MOMO",
        amount: 160.5,
        category: "Transfer",
      },
      {
        key: 7,
        dateTime: "2022-5-18 9:50:22",
        name: "Medic",
        amount: 260.5,
        category: "Medical",
      },
      {
        key: 8,
        dateTime: "2022-5-15 9:50:22",
        name: "BIDV",
        amount: 200.76,
        category: "Transfer",
      },
      {
        key: 9,
        dateTime: "2022-5-15 9:50:22",
        name: "VinHome center park",
        amount: 200.76,
        category: "Office",
      },
    ],
    totalRemainderBank: 1500,
  },
  reducers: {
    update: (state) => {
      state.totalExpenditure = state.history
        .map((item) => item.amount)
        .reduce((a, b) => a + b, 0);
      state.history = state.history.sort((a, b) => b.key - a.key);
    },
    topUp: (state, action) => {
      state.totalRemainder += action.payload.extraAmount;
      state.totalRevenue += action.payload.extraAmount;
      state.history.push({ key: state.history.length + 1, ...action.payload });
      state.totalRemainderBank -= action.payload.extraAmount;
    },
    withDrawals: (state, action) => {
      state.totalRemainder -= action.payload.amount;
      state.totalExpenditure += action.payload.amount;
      state.history.push({ key: state.history.length + 1, ...action.payload });
      state.totalRemainderBank += action.payload.amount;
    },
    transferMoney: (state, action) => {
      state.totalRemainder -= action.payload.amount;
      state.totalExpenditure += action.payload.amount;
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
const selectTotalRemainderBank = (state) => selectApp(state).totalRemainderBank;
const selectHistory = (state) => selectApp(state).history;
const appSelect = {
  selectTotalRemainder,
  selectTotalExpenditure,
  selectTotalRevenue,
  selectHistory,
  selectTotalRemainderBank,
};
// reducer
const appReducer = appSlice.reducer;

export default appReducer;
export { appActions, appSelect };

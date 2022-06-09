import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { HTTP_STATUS } from "../../../app/constant";
import OrderApi from "../../../api/OrderApi"
export const fetchOrdersData = createAsyncThunk(
  'orders/fetchOrdersData',
  async () => {
      const {data} = await OrderApi.getAllOrders()
      return data
  }
)

export const updateOrderData = createAsyncThunk(
  'orders/updateOrderData',
  async (order) => {
      const {data} = await OrderApi.updateOrder(order)
      return order.order_id
  }
)

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
      isShow: false,
      loading: null,
      data: []
  },
  reducers:{
        showDetailOrder: (state, action) => {
          state.isShow = true;
        },
        hideDetailOrder: (state, action) => {
          state.isShow = false;
        }
  },
  extraReducers: {
      [fetchOrdersData.pending](state) {
        state.loading = HTTP_STATUS.PENDING
      },
      [fetchOrdersData.fulfilled](state, {payload}) {
          state.loading = HTTP_STATUS.FULFILLED
          state.data = payload
      },
      [fetchOrdersData.rejected](state) {
        state.loading = HTTP_STATUS.REJECTED
      },

      [updateOrderData.pending](state) {
        state.loading = HTTP_STATUS.PENDING
      },
      [updateOrderData.fulfilled](state, {payload}) {
          state.loading = HTTP_STATUS.FULFILLED
          // state.data = current(state).data.map(item => {

          // })
      },
      [updateOrderData.rejected](state) {
        state.loading = HTTP_STATUS.REJECTED
      },
    }
})
export const selectOrders = (state) => state.orders.data;
export default ordersSlice.reducer
const {actions}= ordersSlice
export const {showDetailOrder, hideDetailOrder} = actions;
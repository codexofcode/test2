import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'db',
  initialState: {
    status: 'initial',
    data: {
      categories: [],
      products: []
    }
  },
  reducers: {
    buyLess (state, action) {
      const { id } = action.payload
      const product = state.data.products.find(product => id === product.id)

      --product.count
    },
    
    buyMore (state, action) {
      const { id } = action.payload
      const product = state.data.products.find(product => id === product.id)

      if (!product.count)
        product.count = 0

      ++product.count
    }
  },
  extraReducers (builder) {
    builder
    .addCase(fetchData.pending, (state, action) => {
      state.status = 'pending'
    })
    .addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.data = action.payload
    })
    .addCase(fetchData.rejected, (state, action) => {
      state.status = 'rejected'
    })

    .addCase(sendData.fulfilled, (state, action) => {
      for (const product of state.data.products)
        product.count = 0
    })
  }
})

export const { buyMore, buyLess } = slice.actions

export const fetchData = createAsyncThunk('db/fetchData', async () => {
  const res = await fetch('/data.json')
  return await res.json()
})

export const sendData = createAsyncThunk('db/sendData', async (data) => {
  const res = await fetch('/basket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
})

export default slice.reducer

export default defineEventHandler(async (event) => {
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_6xswnvH7LQA7okl1je0GWE7ElcqUIQDFAi1DtwyJ')

    return data
})
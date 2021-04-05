

export const getSlots = async () => {
  return new Promise((resolve) => {

    const request = new Request('./slots.json', { method: 'GET'})
    fetch(request).then( async (res) => {

      const response = await res.json()
      resolve(normalizeSlots(response.results))
    });

  })
}

export const createSlot = async (body) => {
  return new Promise((resolve) => {

    const request = new Request("v1/slots", { method: 'POST', body })
    fetch(request).then().catch( async (res) => {
      resolve(res.results)
    });

  })
}

export const upateSlot = async (body) => {
  return new Promise((resolve) => {

    const request = new Request("v1/slots", { method: 'PUT', body })
    fetch(request).then().catch( async (res) => {
      resolve(res.results)
    });

  })
}


export const authUser = async (body) => {
  return new Promise((resolve) => {

    const request = new Request("v1/user", { method: 'POST', body })
    fetch(request).then().catch( async (res) => {
      resolve(res.results)
    });

  })
}

const normalizeSlots = (slots) => {
  const newSlots = slots.reduce((acc, item) => {
    acc[new Date(item.time_stamp).valueOf()] = item;
    return acc;
  }, {});
  return newSlots
}

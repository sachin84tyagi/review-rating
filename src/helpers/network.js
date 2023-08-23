import axios from "axios";
import { projectFireStore } from "../firebase";
import {shopData, userData} from "../dummy-data/sweets-shop"
const API_URL = 'http://localhost:8080/contacts'

export const fetchRecord = async () => {
  try {
    return await axios.get(API_URL);
  } catch ({response}) {
    return response;
  }
}

export const insertRecord = async (payload) => {
  let headerConfig = {}
  try {
    return await axios.post(API_URL, payload, headerConfig)
  } catch ({response}) {
    return response;
  }
}

export const deleteRecord = async (payload) => {
  try {
    return await axios.delete(`${API_URL}/${payload}`)
  } catch ({response}) {
    return response;
  }
}

export const updateRecord = async (payload) => {
  try {
    return await axios.put(`${API_URL}/${payload.id}`, payload)
  } catch ({response}) {
    return response;
  }
}

export const fetchShop = async () => {
  try {
    
    //Fetch shop data
    // await projectFireStore.collection('shops').get().then((snapshot) => {
    //   if (snapshot.empty) {
    //     console.log('No shop found')
    //   } else {
    //     //let results = []
    //     let data = {
    //       shops:[]
    //     }
    //     snapshot.docs.forEach((doc) => {
    //       data.shops.push({ id: doc.id, ...doc.data() })
    //     })
    //     console.log('data :: ', data)
    //     return data
    //   }
    // })
    //console.log('shopData :: ', data)
    //return await data;
    //console.log('shopData :: ', shopData)
    //return await shopData;
  } catch ({response}) {
    return response;
  }
}

export const fetchUser = async () => {
  try {
    return await userData;
  } catch ({response}) {
    return response;
  }
}

export const insertUser = async (payload) => {
  let headerConfig = {}
  try {
    return await axios.post(API_URL, payload, headerConfig)
  } catch ({response}) {
    return response;
  }
}

export const updateUser = async () => {
}

export const deleteUser = async () => {
}

export const checkValidUser = async ({email, password}) => {
  try {
    const validUser = await userData.users.filter((user) => user.email === email && user.password === password )
    return validUser
  } catch ({response}) {
    return response;
  }
}

//axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)

//axios.post(url, data, config)
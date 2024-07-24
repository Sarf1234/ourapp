'use Server'

export default async function handleApiRequest(endpoint, method = 'GET', data = null) {
    const requestOptions = {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    };
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/${endpoint}`, requestOptions);
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      // Network error
      console.error('Network error:', error.message);
      return { success: false, message: 'An error occurred while processing your request' };
    }
  }




  
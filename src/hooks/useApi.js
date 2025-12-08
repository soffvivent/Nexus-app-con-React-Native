import { useState, useEffect } from 'react';

/**
 * Hook personalizado para realizar peticiones a la API
 * @param {Function} apiFunction - Función de la API a ejecutar
 * @param {Array} dependencies - Dependencias para re-ejecutar la petición
 * @returns {Object} - { data, loading, error, refetch }
 */
export const useApi = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction();
      setData(result);
    } catch (err) {
      setError(err.message || 'Error desconocido');
      console.error('Error en useApi:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

/**
 * Hook para manejar formularios
 * @param {Object} initialValues - Valores iniciales del formulario
 * @returns {Object} - { values, handleChange, resetForm }
 */
export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm };
};

export default {
  useApi,
  useForm,
};

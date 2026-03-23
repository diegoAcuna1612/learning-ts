interface UsuarioMuni {
  nombre: string;
  cargo: "Analista" | "Coordinador" | "Gerente";
}

type ErrorResponse=  {
  ok: false;
  codigo: number;
  mensaje: string;
};

interface SuccessResponse {
  ok: true;
  data: UsuarioMuni;
}

//Type me permite decir que esta Respuesta a la API puede ser SuccesResponse o ErrorResponse
type ApiResponse = SuccessResponse | ErrorResponse;


const miRespuesta: ApiResponse = {
  ok: false,
  codigo: 404,
  mensaje:'Error 404'
};

console.log(miRespuesta)
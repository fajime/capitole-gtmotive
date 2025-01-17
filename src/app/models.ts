export interface MakeState {
  makes: Make[];
  makeSelectedModels: MakeModels[];
  makeSelectedTypes: MakeTypes[];
  paramSearch: string;
  make: string;
}

export interface Make {
  Make_ID: string;
  Make_Name: string;
}

export interface ApiResponse<T> {
  Results: T[];
}

export interface MakeModels {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface MakeTypes {
  VehicleTypeId: number;
  VehicleTypeName: string;
}

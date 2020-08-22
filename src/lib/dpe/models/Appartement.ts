import {BatimentUsages} from './BatimentUsages';
import {HabitationProductionChauffageTypes} from './HabitationProductionChauffageTypes';
import {HabitationProductionECSTypes} from './HabitationProductionECSTypes';
import {Immeuble} from './Immeuble';
import {DpeEstimable} from './DpeEstimable';

export class Appartement implements DpeEstimable {
  usage: BatimentUsages;
  typeProductionChauffage: HabitationProductionChauffageTypes;
  typeProductionECS: HabitationProductionECSTypes;
  immeuble: Immeuble;
  pointDeComptageChauffageIndividuel: boolean;
  pointDeComptageECSIndividuel: boolean;

  getDateConstruction(): Date {
    return this.immeuble.dateConstruction;
  }

  getUsage(): BatimentUsages {
    return this.usage;
  }

  getTypeProductionChauffage(): HabitationProductionChauffageTypes {
    return this.typeProductionChauffage;
  }

  getTypeProductionECS(): HabitationProductionECSTypes {
    return this.typeProductionECS;
  }

  hasPointDeComptageChauffageIndividuel(): boolean {
    return this.pointDeComptageChauffageIndividuel;
  }

  hasPointDeComptageECSIndividuel(): boolean {
    return this.pointDeComptageECSIndividuel;
  }
}

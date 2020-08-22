import {BatimentUsages} from './BatimentUsages';
import {HabitationProductionChauffageTypes} from './HabitationProductionChauffageTypes';
import {HabitationProductionECSTypes} from './HabitationProductionECSTypes';

export interface DpeEstimable {
  getDateConstruction(): Date;
  getUsage(): BatimentUsages;

  getTypeProductionChauffage(): HabitationProductionChauffageTypes;
  getTypeProductionECS(): HabitationProductionECSTypes;

  hasPointDeComptageChauffageIndividuel(): boolean;
  hasPointDeComptageECSIndividuel(): boolean;
}

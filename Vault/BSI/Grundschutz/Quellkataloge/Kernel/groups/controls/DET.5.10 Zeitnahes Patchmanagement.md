---
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.5.10 Zeitnahes Patchmanagement
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.5.10 - Zeitnahes Patchmanagement
Gruppe: [DET.5 Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md)
---

> [!info]- Untergeordnete Controls
> [DET.5.10.1 Autorisierte Bezugsquellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.5.10.1%20Autorisierte%20Bezugsquellen.md)> [DET.5.10.2 Automatisierte Überwachung von Systemupdates](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.5.10.2%20Automatisierte%20Überwachung%20von%20Systemupdates.md)> [DET.5.10.3 Automatisierte Überwachung von Anwendungsupdates](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.5.10.3%20Automatisierte%20Überwachung%20von%20Anwendungsupdates.md)> [DET.5.10.4 Integritätsprüfung von Patches](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.5.10.4%20Integritätsprüfung%20von%20Patches.md)> [DET.5.10.5 Test gemäß Änderungsmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.5.10.5%20Test%20gemäß%20Änderungsmanagement.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md) *** |  | SOLLTE | ein zeitnahes Patchmanagement |  | verankern | Detektions-Konzept | >Detektion SOLLTE ein zeitnahes Patchmanagement verankern.

> [!info]- Guidance
>Patches (Updates oder Sicherheitsaktualisierungen) sind neue Versionen, die Sicherheitslücken schließen. Je nach Aufbau der betroffenen Assets kann es bei der Aktualisierung auch erforderlich sein, Abhängigkeiten (Bibliotheken, Upstream Software) ebenfalls zu aktualisieren. Dies kann durch automatisierte Installation oder nach einem Test umgesetzt werden. Die Umsetzung kann auch den schrittweisen Rollout von Patches vorsehen, sodass bei Fehlern im Patch nicht alle Systeme gleichzeitig betroffen sind und auch komplexe Fehlerbilder durch Rückmeldungen frühzeitig erkannt werden können. Dies kann zum Beispiel nach dem One-Many-All-Prinzip oder Blue-Green-Deployment erfolgen. Zur Beurteilung der Kritikalität von Patches kann die Krititikalität der mit dem Patch verbundenen Schwachstellen, das Risikoprofil der zu patchenden Assets oder eine Korrelation komplexer Angriffswege herangezogen werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b2c08460-0038-4f49-b459-dba756e55ae9 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | b2c08460-0038-4f49-b459-dba756e55ae9 |

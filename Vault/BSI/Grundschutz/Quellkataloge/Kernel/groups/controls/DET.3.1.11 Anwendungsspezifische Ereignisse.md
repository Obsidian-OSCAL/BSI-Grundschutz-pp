---
tags: det3111-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1.11 Anwendungsspezifische Ereignisse
parent_control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1.11 - Anwendungsspezifische Ereignisse
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md)
---

** Übergeordnetes Control: ** [DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1%20Protokollierung%20sicherheitsrelevanter%20Ereignisse.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md) *** | Anwendungen | KANN | {{bestimmte anwendungsspezifische Ereignisse}} |  | protokollieren | Audit Log | >Detektion für Anwendungen KANN {{ insert: param, det.3.1.11-prm1 }} protokollieren.

> [!info]- Guidance
>Die Festlegung, welche spezifischen Ereignisse protokolliert werden, obliegt der Institution und hängt von der jeweiligen Systemumgebung und dem Schutzbedarf ab. Beispiele sind Änderungen an Zugangskonten im Verzeichnisdienst, Telekommunikationsverbindungen, ein Verstoß gegen eine konfigurierte Policy, unautorisierter Zugriff, API-Aufrufe zwischen verschiedenen Anwendungskomponenten, Transaktionen in einem Finanzsystem oder einer E-Commerce-Anwendung, Konfigurationsänderungen  oder ein Absturz der Anwendung. Die Protokollierung dieser Ereignisse kann helfen, die Behandlung durch das Betriebspersonal anzustoßen oder Indizien für Ermittler zu sichern.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 80fa36d5-71d4-4a2e-9795-54cedffa44ae |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 80fa36d5-71d4-4a2e-9795-54cedffa44ae |

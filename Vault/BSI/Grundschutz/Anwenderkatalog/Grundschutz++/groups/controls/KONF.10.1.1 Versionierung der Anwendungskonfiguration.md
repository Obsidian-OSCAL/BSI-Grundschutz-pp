---
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.10.1.1 Versionierung der Anwendungskonfiguration
parent_control: KONF.10.1 Grundkonfiguration für Anwendungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.10.1.1 - Versionierung der Anwendungskonfiguration
Gruppe: [KONF.10 Konfiguration von Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.10%20Konfiguration%20von%20Anwendungen.md)
---

** Übergeordnetes Control: ** [KONF.10.1 Grundkonfiguration für Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.10.1%20Grundkonfiguration%20für%20Anwendungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.10%20Konfiguration%20von%20Anwendungen.md) *** | Anwendungen | SOLLTE | eine Versionierung vorheriger Konfigurationen |  | verankern | Konfigurationshistorie | >Konfiguration für Anwendungen SOLLTE eine Versionierung vorheriger Konfigurationen verankern.

> [!info]- Guidance
>Die Versionierung bezeichnet hier die strukturierte Nachvollziehbarkeit von Änderungen an Konfigurationen, also das Speichern, Dokumentieren und bei Bedarf Wiederherstellen älterer Zustände einer Anwendung. Sie unterscheidet sich von einem einfachen Backup dadurch, dass nicht nur eine Kopie vorliegt, sondern explizit eine fortlaufende Historie mit Vergleichen, Rücksetzpunkten (rollback points) und optional Kommentaren geführt wird. Der Zweck liegt darin, dass eine ungewollte oder fehlerhafte Anpassung an einer Anwendungskonfiguration im Betrieb schnell erkannt und – wenn erforderlich – präzise auf einen definierten, funktionsfähigen Zustand zurückgesetzt werden kann. Ohne diese Rückgriffsmöglichkeit könnte ein Konfigurationsfehler den gesamten Dienst außer Betrieb setzen, während eine Versionierung die Verfügbarkeit und Nachvollziehbarkeit stärken kann. Zur Umsetzung kann eine Institution technische Verfahren einsetzen, die eine automatische Ablage und Historisierung von Konfigurationsdateien unterstützen, beispielsweise durch (1) den Einsatz verteilter Versionskontrollsysteme wie Git oder Subversion (SVN) für textbasierte Konfigurationsdateien, (2) integrierte Konfigurationsarchivierung in gängigen Deployment- oder Container-Tools, oder (3) systemseitige Snapshot-Mechanismen, die gezielt für Konfigurationsverzeichnisse genutzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | cb46badf-b942-4007-ab50-e941711b3c58 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | cb46badf-b942-4007-ab50-e941711b3c58 |

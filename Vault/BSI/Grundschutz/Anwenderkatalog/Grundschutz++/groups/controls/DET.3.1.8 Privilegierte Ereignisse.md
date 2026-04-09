---
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1.8 Privilegierte Ereignisse
parent_control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1.8 - Privilegierte Ereignisse
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md)
---

** Übergeordnetes Control: ** [DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.3.1%20Protokollierung%20sicherheitsrelevanter%20Ereignisse.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md) *** | Anwendungen | SOLLTE | privilegierte Ereignisse | einschließlich der Aktivierung, Deaktivierung oder Blockierung privilegierter Funktionen | protokollieren | Audit Log | >Detektion für Anwendungen SOLLTE privilegierte Ereignisse einschließlich der Aktivierung, Deaktivierung oder Blockierung privilegierter Funktionen protokollieren.

> [!info]- Guidance
>Privilegierte Ereignisse sind Vorgänge, bei denen besonders weitreichende Rechte genutzt werden – beispielsweise die Vergabe oder Entziehung von Administratorrechten, das Deaktivieren von Virenscannern oder Änderungen an Firewallregeln. Gerade solche Eingriffe könnten einen erheblichen Einfluss auf die Verfügbarkeit und Integrität von Daten haben. Ohne eine gezielte Aufzeichnung könnten sicherheitsrelevante Änderungen unentdeckt bleiben – etwa, wenn ein Angreifer unbefugt einen privilegierten Account übernimmt und Spuren verwischt, oder wenn ein interner Benutzer kritische Funktionen deaktiviert, wodurch Schutzmaßnahmen umgangen werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e7d500ff-393c-4c14-baed-c87b676efe5c |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | e7d500ff-393c-4c14-baed-c87b676efe5c |

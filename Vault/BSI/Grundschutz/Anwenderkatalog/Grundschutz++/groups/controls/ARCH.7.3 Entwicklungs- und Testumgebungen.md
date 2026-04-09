---
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.7.3 Entwicklungs- und Testumgebungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.7.3 - Entwicklungs- und Testumgebungen
Gruppe: [ARCH.7 Dedizierte Systeme](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.7%20Dedizierte%20Systeme.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Dedizierte Systeme](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.7%20Dedizierte%20Systeme.md) *** | Virtualisierungslösungen | SOLLTE | Entwicklungs- und Testumgebungen nicht auf produktiven Hostsystemen |  | platzieren | Konfigurationshistorie | >Architektur für Virtualisierungslösungen SOLLTE Entwicklungs- und Testumgebungen nicht auf produktiven Hostsystemen platzieren.

> [!info]- Guidance
>Entwicklungs- und Testumgebungen sind dabei Umgebungen, in denen Software noch nicht ausgereift ist, sondern aktiv entwickelt, angepasst oder erprobt wird. Der Sinn der Vorgabe liegt darin, dass instabile oder absichtlich manipulierbare Testsysteme nicht auf denselben Hostsystemen betrieben werden sollten, auf denen produktive Anwendungen laufen. Andernfalls könnte ein Fehler in experimenteller Software dazu führen, dass der Hypervisor oder das Host-Betriebssystem beeinträchtigt wird und produktive Daten oder Dienste in Mitleidenschaft gezogen werden. Ebenso könnte Schadcode, der in einer Testumgebung eingebracht wird, unerwartet in produktive Netze durchgreifen. Durch die Trennung kann sichergestellt werden, dass ein Ausfall oder eine Kompromittierung in Entwicklungsumgebungen nicht die Stabilität und Vertraulichkeit produktiver Systeme gefährdet. Zur praktischen Umsetzung kann eine Institution Entwicklungs- und Testumgebungen auf dedizierte Virtualisierungshosts auslagern, die physisch oder logisch getrennt von den produktiven Hosts betrieben werden. Zusätzlich kann eine Institution Richtlinien zur Lifecycle-Kennzeichnung von VMs einführen (z. B. „dev“, „test“, „prod“ im Namen oder Tagging), um die klare Trennung auch in größeren Umgebungen praktikabel zu machen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 15bdb341-c907-4daa-9e39-1dc3777ef9bc |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 15bdb341-c907-4daa-9e39-1dc3777ef9bc |

> [!info]- Links> > related: [TEST.3.1.4 Testumgebung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/TEST.3.1.4%20Testumgebung.md)

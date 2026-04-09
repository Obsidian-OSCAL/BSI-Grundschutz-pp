---
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.11 P-A-P-Struktur
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.11 - P-A-P-Struktur
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md) *** | Externe Netzanschlüsse | SOLLTE | eine P-A-P-Struktur | für eingehende und ausgehende Verbindungen | installieren | IT-Betriebskonzept | >Architektur für Externe Netzanschlüsse SOLLTE eine P-A-P-Struktur für eingehende und ausgehende Verbindungen installieren.

> [!info]- Guidance
>Die P-A-P-Struktur besteht aus 2 Paketfiltern (P) und einem Filter auf Anwendungsebene (A), die durch Hardware getrennt sind und alle Verbindungen auf Anwendungsebene filtern. In Hardware getrennte Systeme sind hier solche, die jeweils über eigene Rechenkomponenten (CPU, RAM, etc.) verfügen und nur über Netzverbindungen zusammenhängen. Dies minimiert die Angriffsfläche für übergreifende Angriffe wie Covert Channel oder Side Channel.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | bd23cb10-ab1e-42b2-81bc-b7c1705fb16a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | bd23cb10-ab1e-42b2-81bc-b7c1705fb16a |

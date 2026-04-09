---
tags: Insider_Threat
class: BSI-Stand-der-Technik-Kernel
type: control
control: PERS.2.3.2 Rollentrennung - Virtualisierung
parent_control: PERS.2.3 Rollentrennung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# PERS.2.3.2 - Rollentrennung - Virtualisierung
Tags: "[Insider Threat](tags_Insider Threat)"
Gruppe: [PERS.2 Aufgaben, Rollen, Zuständigkeiten](BSI/Grundschutz/Quellkataloge/Kernel/groups/PERS.2%20Aufgaben,%20Rollen,%20Zuständigkeiten.md)
---

** Übergeordnetes Control: ** [PERS.2.3 Rollentrennung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/PERS.2.3%20Rollentrennung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Personal (PERS)](BSI/Grundschutz/Quellkataloge/Kernel/groups/PERS%20Personal.md)**<br> ***  &rarr; [Aufgaben, Rollen, Zuständigkeiten](BSI/Grundschutz/Quellkataloge/Kernel/groups/PERS.2%20Aufgaben,%20Rollen,%20Zuständigkeiten.md) *** |  | SOLLTE | zwischen Administration von virtuellen Systemen und Virtualisierungslösungen eine Rollentrennung |  | verankern | Geschäftsverteilungsplan | >Personal SOLLTE zwischen Administration von virtuellen Systemen und Virtualisierungslösungen eine Rollentrennung verankern.

> [!info]- Guidance
>Die Administration von virtuellen Systemen bezeichnet im hier relevanten Kontext die operative Verwaltung einzelner virtueller Gastsysteme (VMs, Container, etc.), einschließlich ihrer Bereitstellung, Konfiguration, Wartung und Zugriffskontrolle. Die Virtualisierungslösung hingegen ist hier die übergeordnete Plattform oder Hypervisor-Ebene, welche physische Ressourcen virtualisiert und mehreren virtuellen Gastsystemen bereitstellt. Diese Differenzierung entspricht dem Prinzip der Rollen- bzw. Funktionstrennung (separation of duties bzw. role separation), bei dem Aufgabenbereiche so abgegrenzt werden, dass keine Person gleichzeitig über kritische Systemebenen hinweg vollumfängliche Kontrolle besitzt. Damit wird ein wesentliches Sicherheitsprinzip technischer Infrastruktur auf die Virtualisierungsschichten übertragen.  Der Zweck dieser Trennung liegt in der Begrenzung von Fehlerrisiken und der Prävention von Missbrauch – sowohl vorsätzlich als auch unbeabsichtigt. Eine Person, die zugleich die Virtualisierungsebene und virtuelle Systeme verwaltet, könnte durch Fehlkonfiguration, Nachlässigkeit oder Manipulation unbeabsichtigt erhebliche Auswirkungen auf eine Vielzahl von Systemen haben oder deren Nachvollziehbarkeit beeinträchtigen. Eine klare Rollentrennung kann dem vorbeugen, indem sie Kontrollmechanismen stärkt, die Integrität der Umgebung wahrt und Fehler früher erkennen lässt.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e26fc4a9-c6cf-41f8-bfd7-e01cc950de47 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | e26fc4a9-c6cf-41f8-bfd7-e01cc950de47 |

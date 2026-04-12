---
tags:
- lateral_movement_separation_of_concerns
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.2.3 Segmentierung von Servern und Clients
parent_control: ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten
stmt_target_object_category: Netze
stmt_modal_verb: SOLLTE
stmt_action_word: einschränken
stmt_documentation: Netzplan
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.2.3 - Segmentierung von Servern und Clients
> [!example]- Tags:> [[tags_Lateral Movement|Lateral Movement]]> [[tags_Separation of Concerns|Separation of Concerns]]
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md)
---

** Übergeordnetes Control: ** [ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.2.2%20Einschränkung%20von%20Verbindungen%20zwischen%20Segmenten.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Netze](target_object_categories_Netze_1a4fb57d-1648-4111-979d-6a5f4f848620) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Verbindungen zwischen Hostsystemen und Clients |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Netzplan](documentation_guidelines_Netzplan) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Netze SOLLTE Verbindungen zwischen Hostsystemen und Clients einschränken.</span>

> [!info]- Guidance
>Die Anforderung gilt auch, wenn die IT-Systeme nur noch als VMs oder Container existieren. Die Segmentierung kann hier in die virtuelle Netzwerk‑Ebene verlagert werden, sodass die Segmentierung weder vom Hypervisor noch von den Workloads umgangen wird. Die Anforderung kann auch physisch durch dedizierte Infrastruktur für VDI/Client‑VMs umgesetzt werden. Um die klare Trennung sicherzustellen, wird empfohlen kein Bridging zwischen Port‑Groups sowie auf dem virtuellen Switch keinen promiscuous Mode zu verwenden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 8af42e9e-5340-4690-9567-88a5309aee3a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 8af42e9e-5340-4690-9567-88a5309aee3a |
